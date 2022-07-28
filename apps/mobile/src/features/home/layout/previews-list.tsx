import { useTheme } from "@rneui/themed";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

import { EmptyList } from "components";
import { useHomePreviewsQuery } from "shared/lib/graphql";

import {
  PreviewListSection,
  PreviewListSectionProps
} from "../components/preview-list-section";
import { getSeasonInfo } from "shared/utils";

export const PreviewsList = () => {
  const { theme } = useTheme();

  const [previews, setPreviews] = useState<PreviewListSectionProps[]>();
  const [hasListBeenPopulated, setHasListBeenPopulated] = useState(false);

  const seasonInfo = getSeasonInfo();

  const [{ data, fetching }, reexecuteQuery] = useHomePreviewsQuery({
    variables: seasonInfo
  });

  useEffect(() => {
    if (data) {
      const popularPreview = {
        title: "Populaire",
        animes: data?.popular
      };

      const seasonPreview = {
        title: "Saison actuelle",
        animes: data?.season
      };

      const nextSeasonPreview = {
        title: "Saison prochaine",
        animes: data?.nextSeason
      };

      const topPreview = {
        title: "Top",
        animes: data?.top
      };

      setPreviews([
        popularPreview,
        seasonPreview,
        nextSeasonPreview,
        topPreview
      ]);

      setHasListBeenPopulated(true);
    }
  }, [data]);

  if (fetching || !hasListBeenPopulated)
    return (
      <View
        style={{
          marginTop: theme.spacing.xl,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ActivityIndicator color={theme.colors.white} />
      </View>
    );

  return (
    <FlatList
      data={previews}
      renderItem={({ item }) => <PreviewListSection {...item} />}
      keyExtractor={(item, index) => item.title + index}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <EmptyList
          title={"Oups! \nIl n'y a rien à afficher ici."}
          subtitle={"(Vérifie ta connexion 👀)"}
        />
      }
      onRefresh={reexecuteQuery}
      refreshing={fetching}
    />
  );
};

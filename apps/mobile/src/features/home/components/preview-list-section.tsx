import { Text, useTheme } from "@rneui/themed";
import { ScrollView, View } from "react-native";
import {
  moderateScale,
  moderateVerticalScale
} from "react-native-size-matters";

import { AnimeCard } from "components";
import { AnimePreviewFieldsFragment } from "shared/lib/graphql";

import { SeeMoreCard } from "./see-more-card";

const CARD_WIDTH = moderateScale(125, 0.1);
const CARD_HEIGHT = moderateVerticalScale(210, 0.1);

export const PreviewListSection = ({
  title,
  animes
}: PreviewListSectionProps) => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        marginBottom: theme.spacing.md,
        marginLeft: theme.spacing.sm,
        justifyContent: "center",
        alignItems: "flex-start"
      }}
    >
      <Text h2>{title}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {animes?.map((item) => (
          <AnimeCard
            key={item.id}
            title={item.title}
            coverImage={item.coverImage}
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
            onPress={() => {}}
          />
        ))}

        <SeeMoreCard onPress={() => {}} />
      </ScrollView>
    </View>
  );
};

export type PreviewListSectionProps = {
  title: string;
  animes: AnimePreviewFieldsFragment[];
};

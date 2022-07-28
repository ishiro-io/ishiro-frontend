import {
  OptimisticMutationResolver as GraphCacheOptimisticMutationResolver,
  Resolver as GraphCacheResolver,
  StorageAdapter as GraphCacheStorageAdapter,
  UpdateResolver as GraphCacheUpdateResolver
} from "@urql/exchange-graphcache";
import { IntrospectionData } from "@urql/exchange-graphcache/dist/types/ast";
import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Anime = {
  __typename?: "Anime";
  _count: AnimeCount;
  bannerImage?: Maybe<Scalars["String"]>;
  categories?: Maybe<Array<Category>>;
  coverImage?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Int"]>;
  endDate?: Maybe<Scalars["DateTime"]>;
  episodes?: Maybe<Array<Episode>>;
  format?: Maybe<AnimeFormat>;
  id: Scalars["ID"];
  idAniDB?: Maybe<Scalars["Int"]>;
  idAnilist: Scalars["Int"];
  idKitsu?: Maybe<Scalars["Int"]>;
  idMal?: Maybe<Scalars["Int"]>;
  isAdult: Scalars["Boolean"];
  popularityAnilist?: Maybe<Scalars["Int"]>;
  releaseDate?: Maybe<Scalars["DateTime"]>;
  scoreAnilist?: Maybe<Scalars["Float"]>;
  season?: Maybe<AnimeSeason>;
  seasonYear?: Maybe<Scalars["Int"]>;
  status?: Maybe<AnimeStatus>;
  title: Scalars["String"];
  titleEnglish?: Maybe<Scalars["String"]>;
  titleFrench?: Maybe<Scalars["String"]>;
  titleKanji?: Maybe<Scalars["String"]>;
  titleRomaji?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
};

export type AnimeAvgAggregate = {
  __typename?: "AnimeAvgAggregate";
  duration?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  idAniDB?: Maybe<Scalars["Float"]>;
  idAnilist?: Maybe<Scalars["Float"]>;
  idKitsu?: Maybe<Scalars["Float"]>;
  idMal?: Maybe<Scalars["Float"]>;
  popularityAnilist?: Maybe<Scalars["Float"]>;
  scoreAnilist?: Maybe<Scalars["Float"]>;
  seasonYear?: Maybe<Scalars["Float"]>;
};

export type AnimeCount = {
  __typename?: "AnimeCount";
  categories: Scalars["Int"];
  episodes: Scalars["Int"];
};

export type AnimeCountAggregate = {
  __typename?: "AnimeCountAggregate";
  _all: Scalars["Int"];
  bannerImage: Scalars["Int"];
  coverImage: Scalars["Int"];
  createdAt: Scalars["Int"];
  description: Scalars["Int"];
  duration: Scalars["Int"];
  endDate: Scalars["Int"];
  format: Scalars["Int"];
  id: Scalars["Int"];
  idAniDB: Scalars["Int"];
  idAnilist: Scalars["Int"];
  idKitsu: Scalars["Int"];
  idMal: Scalars["Int"];
  isAdult: Scalars["Int"];
  popularityAnilist: Scalars["Int"];
  releaseDate: Scalars["Int"];
  scoreAnilist: Scalars["Int"];
  season: Scalars["Int"];
  seasonYear: Scalars["Int"];
  status: Scalars["Int"];
  title: Scalars["Int"];
  titleEnglish: Scalars["Int"];
  titleFrench: Scalars["Int"];
  titleKanji: Scalars["Int"];
  titleRomaji: Scalars["Int"];
  updatedAt: Scalars["Int"];
};

export enum AnimeFormat {
  Movie = "MOVIE",
  Ona = "ONA",
  Ova = "OVA",
  Special = "SPECIAL",
  Tv = "TV",
  TvShort = "TV_SHORT"
}

export type AnimeListRelationFilter = {
  every?: InputMaybe<AnimeWhereInput>;
  none?: InputMaybe<AnimeWhereInput>;
  some?: InputMaybe<AnimeWhereInput>;
};

export type AnimeMaxAggregate = {
  __typename?: "AnimeMaxAggregate";
  bannerImage?: Maybe<Scalars["String"]>;
  coverImage?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Int"]>;
  endDate?: Maybe<Scalars["DateTime"]>;
  format?: Maybe<AnimeFormat>;
  id?: Maybe<Scalars["Int"]>;
  idAniDB?: Maybe<Scalars["Int"]>;
  idAnilist?: Maybe<Scalars["Int"]>;
  idKitsu?: Maybe<Scalars["Int"]>;
  idMal?: Maybe<Scalars["Int"]>;
  isAdult?: Maybe<Scalars["Boolean"]>;
  popularityAnilist?: Maybe<Scalars["Int"]>;
  releaseDate?: Maybe<Scalars["DateTime"]>;
  scoreAnilist?: Maybe<Scalars["Float"]>;
  season?: Maybe<AnimeSeason>;
  seasonYear?: Maybe<Scalars["Int"]>;
  status?: Maybe<AnimeStatus>;
  title?: Maybe<Scalars["String"]>;
  titleEnglish?: Maybe<Scalars["String"]>;
  titleFrench?: Maybe<Scalars["String"]>;
  titleKanji?: Maybe<Scalars["String"]>;
  titleRomaji?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type AnimeMinAggregate = {
  __typename?: "AnimeMinAggregate";
  bannerImage?: Maybe<Scalars["String"]>;
  coverImage?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Int"]>;
  endDate?: Maybe<Scalars["DateTime"]>;
  format?: Maybe<AnimeFormat>;
  id?: Maybe<Scalars["Int"]>;
  idAniDB?: Maybe<Scalars["Int"]>;
  idAnilist?: Maybe<Scalars["Int"]>;
  idKitsu?: Maybe<Scalars["Int"]>;
  idMal?: Maybe<Scalars["Int"]>;
  isAdult?: Maybe<Scalars["Boolean"]>;
  popularityAnilist?: Maybe<Scalars["Int"]>;
  releaseDate?: Maybe<Scalars["DateTime"]>;
  scoreAnilist?: Maybe<Scalars["Float"]>;
  season?: Maybe<AnimeSeason>;
  seasonYear?: Maybe<Scalars["Int"]>;
  status?: Maybe<AnimeStatus>;
  title?: Maybe<Scalars["String"]>;
  titleEnglish?: Maybe<Scalars["String"]>;
  titleFrench?: Maybe<Scalars["String"]>;
  titleKanji?: Maybe<Scalars["String"]>;
  titleRomaji?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type AnimeOrderByWithRelationInput = {
  bannerImage?: InputMaybe<SortOrderInput>;
  categories?: InputMaybe<CategoryOrderByRelationAggregateInput>;
  coverImage?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  duration?: InputMaybe<SortOrderInput>;
  endDate?: InputMaybe<SortOrderInput>;
  episodes?: InputMaybe<EpisodeOrderByRelationAggregateInput>;
  format?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  idAniDB?: InputMaybe<SortOrderInput>;
  idAnilist?: InputMaybe<SortOrder>;
  idKitsu?: InputMaybe<SortOrderInput>;
  idMal?: InputMaybe<SortOrderInput>;
  isAdult?: InputMaybe<SortOrder>;
  popularityAnilist?: InputMaybe<SortOrderInput>;
  releaseDate?: InputMaybe<SortOrderInput>;
  scoreAnilist?: InputMaybe<SortOrderInput>;
  season?: InputMaybe<SortOrderInput>;
  seasonYear?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  titleEnglish?: InputMaybe<SortOrderInput>;
  titleFrench?: InputMaybe<SortOrderInput>;
  titleKanji?: InputMaybe<SortOrderInput>;
  titleRomaji?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AnimeRelationFilter = {
  is?: InputMaybe<AnimeWhereInput>;
  isNot?: InputMaybe<AnimeWhereInput>;
};

export enum AnimeSeason {
  Fall = "FALL",
  Spring = "SPRING",
  Summer = "SUMMER",
  Winter = "WINTER"
}

export enum AnimeStatus {
  Cancelled = "CANCELLED",
  Finished = "FINISHED",
  Hiatus = "HIATUS",
  NotYetReleased = "NOT_YET_RELEASED",
  Releasing = "RELEASING"
}

export type AnimeSumAggregate = {
  __typename?: "AnimeSumAggregate";
  duration?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  idAniDB?: Maybe<Scalars["Int"]>;
  idAnilist?: Maybe<Scalars["Int"]>;
  idKitsu?: Maybe<Scalars["Int"]>;
  idMal?: Maybe<Scalars["Int"]>;
  popularityAnilist?: Maybe<Scalars["Int"]>;
  scoreAnilist?: Maybe<Scalars["Float"]>;
  seasonYear?: Maybe<Scalars["Int"]>;
};

export type AnimeWhereInput = {
  AND?: InputMaybe<Array<AnimeWhereInput>>;
  NOT?: InputMaybe<Array<AnimeWhereInput>>;
  OR?: InputMaybe<Array<AnimeWhereInput>>;
  bannerImage?: InputMaybe<StringNullableFilter>;
  categories?: InputMaybe<CategoryListRelationFilter>;
  coverImage?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  duration?: InputMaybe<IntNullableFilter>;
  endDate?: InputMaybe<DateTimeNullableFilter>;
  episodes?: InputMaybe<EpisodeListRelationFilter>;
  format?: InputMaybe<EnumAnimeFormatNullableFilter>;
  id?: InputMaybe<IntFilter>;
  idAniDB?: InputMaybe<IntNullableFilter>;
  idAnilist?: InputMaybe<IntFilter>;
  idKitsu?: InputMaybe<IntNullableFilter>;
  idMal?: InputMaybe<IntNullableFilter>;
  isAdult?: InputMaybe<BoolFilter>;
  popularityAnilist?: InputMaybe<IntNullableFilter>;
  releaseDate?: InputMaybe<DateTimeNullableFilter>;
  scoreAnilist?: InputMaybe<FloatNullableFilter>;
  season?: InputMaybe<EnumAnimeSeasonNullableFilter>;
  seasonYear?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<EnumAnimeStatusNullableFilter>;
  title?: InputMaybe<StringFilter>;
  titleEnglish?: InputMaybe<StringNullableFilter>;
  titleFrench?: InputMaybe<StringNullableFilter>;
  titleKanji?: InputMaybe<StringNullableFilter>;
  titleRomaji?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Category = {
  __typename?: "Category";
  _count: CategoryCount;
  animes?: Maybe<Array<Anime>>;
  coverImage?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type CategoryAvgAggregate = {
  __typename?: "CategoryAvgAggregate";
  id?: Maybe<Scalars["Float"]>;
};

export type CategoryCount = {
  __typename?: "CategoryCount";
  animes: Scalars["Int"];
};

export type CategoryCountAggregate = {
  __typename?: "CategoryCountAggregate";
  _all: Scalars["Int"];
  coverImage: Scalars["Int"];
  id: Scalars["Int"];
  name: Scalars["Int"];
};

export type CategoryListRelationFilter = {
  every?: InputMaybe<CategoryWhereInput>;
  none?: InputMaybe<CategoryWhereInput>;
  some?: InputMaybe<CategoryWhereInput>;
};

export type CategoryMaxAggregate = {
  __typename?: "CategoryMaxAggregate";
  coverImage?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

export type CategoryMinAggregate = {
  __typename?: "CategoryMinAggregate";
  coverImage?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

export type CategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CategorySumAggregate = {
  __typename?: "CategorySumAggregate";
  id?: Maybe<Scalars["Int"]>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  animes?: InputMaybe<AnimeListRelationFilter>;
  coverImage?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type EnumAnimeFormatNullableFilter = {
  equals?: InputMaybe<AnimeFormat>;
  in?: InputMaybe<Array<AnimeFormat>>;
  not?: InputMaybe<NestedEnumAnimeFormatNullableFilter>;
  notIn?: InputMaybe<Array<AnimeFormat>>;
};

export type EnumAnimeSeasonNullableFilter = {
  equals?: InputMaybe<AnimeSeason>;
  in?: InputMaybe<Array<AnimeSeason>>;
  not?: InputMaybe<NestedEnumAnimeSeasonNullableFilter>;
  notIn?: InputMaybe<Array<AnimeSeason>>;
};

export type EnumAnimeStatusNullableFilter = {
  equals?: InputMaybe<AnimeStatus>;
  in?: InputMaybe<Array<AnimeStatus>>;
  not?: InputMaybe<NestedEnumAnimeStatusNullableFilter>;
  notIn?: InputMaybe<Array<AnimeStatus>>;
};

export type Episode = {
  __typename?: "Episode";
  airedDate?: Maybe<Scalars["DateTime"]>;
  anime: Anime;
  animeId: Scalars["Int"];
  arcName?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  isFiller: Scalars["Boolean"];
  isRecap: Scalars["Boolean"];
  length?: Maybe<Scalars["Int"]>;
  number: Scalars["Int"];
  title?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
};

export type EpisodeAvgAggregate = {
  __typename?: "EpisodeAvgAggregate";
  animeId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  length?: Maybe<Scalars["Float"]>;
  number?: Maybe<Scalars["Float"]>;
};

export type EpisodeCountAggregate = {
  __typename?: "EpisodeCountAggregate";
  _all: Scalars["Int"];
  airedDate: Scalars["Int"];
  animeId: Scalars["Int"];
  arcName: Scalars["Int"];
  createdAt: Scalars["Int"];
  id: Scalars["Int"];
  isFiller: Scalars["Int"];
  isRecap: Scalars["Int"];
  length: Scalars["Int"];
  number: Scalars["Int"];
  title: Scalars["Int"];
  updatedAt: Scalars["Int"];
};

export type EpisodeListRelationFilter = {
  every?: InputMaybe<EpisodeWhereInput>;
  none?: InputMaybe<EpisodeWhereInput>;
  some?: InputMaybe<EpisodeWhereInput>;
};

export type EpisodeMaxAggregate = {
  __typename?: "EpisodeMaxAggregate";
  airedDate?: Maybe<Scalars["DateTime"]>;
  animeId?: Maybe<Scalars["Int"]>;
  arcName?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["Int"]>;
  isFiller?: Maybe<Scalars["Boolean"]>;
  isRecap?: Maybe<Scalars["Boolean"]>;
  length?: Maybe<Scalars["Int"]>;
  number?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type EpisodeMinAggregate = {
  __typename?: "EpisodeMinAggregate";
  airedDate?: Maybe<Scalars["DateTime"]>;
  animeId?: Maybe<Scalars["Int"]>;
  arcName?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["Int"]>;
  isFiller?: Maybe<Scalars["Boolean"]>;
  isRecap?: Maybe<Scalars["Boolean"]>;
  length?: Maybe<Scalars["Int"]>;
  number?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type EpisodeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EpisodeSumAggregate = {
  __typename?: "EpisodeSumAggregate";
  animeId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  length?: Maybe<Scalars["Int"]>;
  number?: Maybe<Scalars["Int"]>;
};

export type EpisodeWhereInput = {
  AND?: InputMaybe<Array<EpisodeWhereInput>>;
  NOT?: InputMaybe<Array<EpisodeWhereInput>>;
  OR?: InputMaybe<Array<EpisodeWhereInput>>;
  airedDate?: InputMaybe<DateTimeNullableFilter>;
  anime?: InputMaybe<AnimeRelationFilter>;
  animeId?: InputMaybe<IntFilter>;
  arcName?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  isFiller?: InputMaybe<BoolFilter>;
  isRecap?: InputMaybe<BoolFilter>;
  length?: InputMaybe<IntNullableFilter>;
  number?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type Mutation = {
  __typename?: "Mutation";
  logout: Scalars["Boolean"];
  phoneAskConfirmationCode: Scalars["Boolean"];
  phoneConnect: PhoneConnectOutput;
  phoneRegister: User;
};

export type MutationPhoneAskConfirmationCodeArgs = {
  input: PhoneAskConfirmationCodeInput;
};

export type MutationPhoneConnectArgs = {
  input: PhoneConnectInput;
};

export type MutationPhoneRegisterArgs = {
  input: PhoneRegisterInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type NestedEnumAnimeFormatNullableFilter = {
  equals?: InputMaybe<AnimeFormat>;
  in?: InputMaybe<Array<AnimeFormat>>;
  not?: InputMaybe<NestedEnumAnimeFormatNullableFilter>;
  notIn?: InputMaybe<Array<AnimeFormat>>;
};

export type NestedEnumAnimeSeasonNullableFilter = {
  equals?: InputMaybe<AnimeSeason>;
  in?: InputMaybe<Array<AnimeSeason>>;
  not?: InputMaybe<NestedEnumAnimeSeasonNullableFilter>;
  notIn?: InputMaybe<Array<AnimeSeason>>;
};

export type NestedEnumAnimeStatusNullableFilter = {
  equals?: InputMaybe<AnimeStatus>;
  in?: InputMaybe<Array<AnimeStatus>>;
  not?: InputMaybe<NestedEnumAnimeStatusNullableFilter>;
  notIn?: InputMaybe<Array<AnimeStatus>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export enum NullsOrder {
  First = "first",
  Last = "last"
}

export type PhoneAskConfirmationCodeInput = {
  phoneNumber: Scalars["String"];
};

export type PhoneAuth = {
  __typename?: "PhoneAuth";
  id: Scalars["ID"];
  phoneNumber: Scalars["String"];
  user: User;
  userId: Scalars["Int"];
};

export type PhoneAuthAvgAggregate = {
  __typename?: "PhoneAuthAvgAggregate";
  id?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type PhoneAuthCountAggregate = {
  __typename?: "PhoneAuthCountAggregate";
  _all: Scalars["Int"];
  id: Scalars["Int"];
  phoneNumber: Scalars["Int"];
  userId: Scalars["Int"];
};

export type PhoneAuthMaxAggregate = {
  __typename?: "PhoneAuthMaxAggregate";
  id?: Maybe<Scalars["Int"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["Int"]>;
};

export type PhoneAuthMinAggregate = {
  __typename?: "PhoneAuthMinAggregate";
  id?: Maybe<Scalars["Int"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["Int"]>;
};

export type PhoneAuthSumAggregate = {
  __typename?: "PhoneAuthSumAggregate";
  id?: Maybe<Scalars["Int"]>;
  userId?: Maybe<Scalars["Int"]>;
};

export type PhoneConnectInput = {
  code: Scalars["String"];
  phoneNumber: Scalars["String"];
};

export type PhoneConnectOutput = {
  __typename?: "PhoneConnectOutput";
  doesUserExists: Scalars["Boolean"];
  user?: Maybe<User>;
};

export type PhoneRegisterInput = {
  code: Scalars["String"];
  phoneNumber: Scalars["String"];
  username: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  anime: Anime;
  animes: Array<Anime>;
  categorys: Array<Category>;
  me?: Maybe<User>;
};

export type QueryAnimeArgs = {
  id: Scalars["Float"];
};

export type QueryAnimesArgs = {
  orderBy?: InputMaybe<Array<AnimeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AnimeWhereInput>;
};

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive"
}

export enum SortOrder {
  Asc = "asc",
  Desc = "desc"
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  PhoneAuth?: Maybe<PhoneAuth>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  updatedAt: Scalars["DateTime"];
  username: Scalars["String"];
};

export type UserAvgAggregate = {
  __typename?: "UserAvgAggregate";
  id?: Maybe<Scalars["Float"]>;
};

export type UserCountAggregate = {
  __typename?: "UserCountAggregate";
  _all: Scalars["Int"];
  createdAt: Scalars["Int"];
  id: Scalars["Int"];
  updatedAt: Scalars["Int"];
  username: Scalars["Int"];
};

export type UserMaxAggregate = {
  __typename?: "UserMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  username?: Maybe<Scalars["String"]>;
};

export type UserMinAggregate = {
  __typename?: "UserMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  username?: Maybe<Scalars["String"]>;
};

export type UserSumAggregate = {
  __typename?: "UserSumAggregate";
  id?: Maybe<Scalars["Int"]>;
};

export type AnimePreviewFieldsFragment = {
  __typename?: "Anime";
  id: string;
  title: string;
  coverImage?: string | undefined;
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: "Mutation"; logout: boolean };

export type PhoneAskConfirmationCodeMutationVariables = Exact<{
  input: PhoneAskConfirmationCodeInput;
}>;

export type PhoneAskConfirmationCodeMutation = {
  __typename?: "Mutation";
  phoneAskConfirmationCode: boolean;
};

export type PhoneConnectMutationVariables = Exact<{
  input: PhoneConnectInput;
}>;

export type PhoneConnectMutation = {
  __typename?: "Mutation";
  phoneConnect: {
    __typename?: "PhoneConnectOutput";
    doesUserExists: boolean;
    user?: { __typename?: "User"; id: string; username: string } | undefined;
  };
};

export type PhoneRegisterMutationVariables = Exact<{
  input: PhoneRegisterInput;
}>;

export type PhoneRegisterMutation = {
  __typename?: "Mutation";
  phoneRegister: { __typename?: "User"; id: string; username: string };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me?: { __typename?: "User"; id: string; username: string } | undefined;
};

export type HomePreviewsQueryVariables = Exact<{
  currentSeason: AnimeSeason;
  currentYear: Scalars["Int"];
  nextSeason: AnimeSeason;
  nextYear: Scalars["Int"];
}>;

export type HomePreviewsQuery = {
  __typename?: "Query";
  season: Array<{
    __typename?: "Anime";
    id: string;
    title: string;
    coverImage?: string | undefined;
  }>;
  nextSeason: Array<{
    __typename?: "Anime";
    id: string;
    title: string;
    coverImage?: string | undefined;
  }>;
  popular: Array<{
    __typename?: "Anime";
    id: string;
    title: string;
    coverImage?: string | undefined;
  }>;
  top: Array<{
    __typename?: "Anime";
    id: string;
    title: string;
    coverImage?: string | undefined;
  }>;
};

export type UserFieldsFragment = {
  __typename?: "User";
  id: string;
  username: string;
};

export const AnimePreviewFieldsFragmentDoc = gql`
  fragment AnimePreviewFields on Anime {
    id
    title
    coverImage
  }
`;
export const UserFieldsFragmentDoc = gql`
  fragment UserFields on User {
    id
    username
  }
`;
export const LogoutDocument = gql`
  mutation logout {
    logout
  }
`;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument
  );
}
export const PhoneAskConfirmationCodeDocument = gql`
  mutation phoneAskConfirmationCode($input: PhoneAskConfirmationCodeInput!) {
    phoneAskConfirmationCode(input: $input)
  }
`;

export function usePhoneAskConfirmationCodeMutation() {
  return Urql.useMutation<
    PhoneAskConfirmationCodeMutation,
    PhoneAskConfirmationCodeMutationVariables
  >(PhoneAskConfirmationCodeDocument);
}
export const PhoneConnectDocument = gql`
  mutation phoneConnect($input: PhoneConnectInput!) {
    phoneConnect(input: $input) {
      doesUserExists
      user {
        ...UserFields
      }
    }
  }
  ${UserFieldsFragmentDoc}
`;

export function usePhoneConnectMutation() {
  return Urql.useMutation<PhoneConnectMutation, PhoneConnectMutationVariables>(
    PhoneConnectDocument
  );
}
export const PhoneRegisterDocument = gql`
  mutation phoneRegister($input: PhoneRegisterInput!) {
    phoneRegister(input: $input) {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;

export function usePhoneRegisterMutation() {
  return Urql.useMutation<
    PhoneRegisterMutation,
    PhoneRegisterMutationVariables
  >(PhoneRegisterDocument);
}
export const MeDocument = gql`
  query me {
    me {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;

export function useMeQuery(
  options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, "query">
) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
}
export const HomePreviewsDocument = gql`
  query homePreviews(
    $currentSeason: AnimeSeason!
    $currentYear: Int!
    $nextSeason: AnimeSeason!
    $nextYear: Int!
  ) {
    season: animes(
      take: 10
      skip: 0
      where: {
        season: { equals: $currentSeason }
        seasonYear: { equals: $currentYear }
      }
      orderBy: { popularityAnilist: { sort: desc } }
    ) {
      ...AnimePreviewFields
    }
    nextSeason: animes(
      take: 10
      skip: 0
      where: {
        season: { equals: $nextSeason }
        seasonYear: { equals: $nextYear }
      }
      orderBy: { popularityAnilist: { sort: desc } }
    ) {
      ...AnimePreviewFields
    }
    popular: animes(
      take: 10
      skip: 0
      orderBy: { popularityAnilist: { sort: desc } }
    ) {
      ...AnimePreviewFields
    }
    top: animes(
      take: 10
      skip: 0
      orderBy: { scoreAnilist: { sort: desc, nulls: last } }
    ) {
      ...AnimePreviewFields
    }
  }
  ${AnimePreviewFieldsFragmentDoc}
`;

export function useHomePreviewsQuery(
  options: Omit<Urql.UseQueryArgs<HomePreviewsQueryVariables>, "query">
) {
  return Urql.useQuery<HomePreviewsQuery>({
    query: HomePreviewsDocument,
    ...options
  });
}
export type WithTypename<T extends { __typename?: any }> = Partial<T> & {
  __typename: NonNullable<T["__typename"]>;
};

export type GraphCacheKeysConfig = {
  Anime?: (data: WithTypename<Anime>) => null | string;
  AnimeAvgAggregate?: (data: WithTypename<AnimeAvgAggregate>) => null | string;
  AnimeCount?: (data: WithTypename<AnimeCount>) => null | string;
  AnimeCountAggregate?: (
    data: WithTypename<AnimeCountAggregate>
  ) => null | string;
  AnimeMaxAggregate?: (data: WithTypename<AnimeMaxAggregate>) => null | string;
  AnimeMinAggregate?: (data: WithTypename<AnimeMinAggregate>) => null | string;
  AnimeSumAggregate?: (data: WithTypename<AnimeSumAggregate>) => null | string;
  Category?: (data: WithTypename<Category>) => null | string;
  CategoryAvgAggregate?: (
    data: WithTypename<CategoryAvgAggregate>
  ) => null | string;
  CategoryCount?: (data: WithTypename<CategoryCount>) => null | string;
  CategoryCountAggregate?: (
    data: WithTypename<CategoryCountAggregate>
  ) => null | string;
  CategoryMaxAggregate?: (
    data: WithTypename<CategoryMaxAggregate>
  ) => null | string;
  CategoryMinAggregate?: (
    data: WithTypename<CategoryMinAggregate>
  ) => null | string;
  CategorySumAggregate?: (
    data: WithTypename<CategorySumAggregate>
  ) => null | string;
  Episode?: (data: WithTypename<Episode>) => null | string;
  EpisodeAvgAggregate?: (
    data: WithTypename<EpisodeAvgAggregate>
  ) => null | string;
  EpisodeCountAggregate?: (
    data: WithTypename<EpisodeCountAggregate>
  ) => null | string;
  EpisodeMaxAggregate?: (
    data: WithTypename<EpisodeMaxAggregate>
  ) => null | string;
  EpisodeMinAggregate?: (
    data: WithTypename<EpisodeMinAggregate>
  ) => null | string;
  EpisodeSumAggregate?: (
    data: WithTypename<EpisodeSumAggregate>
  ) => null | string;
  PhoneAuth?: (data: WithTypename<PhoneAuth>) => null | string;
  PhoneAuthAvgAggregate?: (
    data: WithTypename<PhoneAuthAvgAggregate>
  ) => null | string;
  PhoneAuthCountAggregate?: (
    data: WithTypename<PhoneAuthCountAggregate>
  ) => null | string;
  PhoneAuthMaxAggregate?: (
    data: WithTypename<PhoneAuthMaxAggregate>
  ) => null | string;
  PhoneAuthMinAggregate?: (
    data: WithTypename<PhoneAuthMinAggregate>
  ) => null | string;
  PhoneAuthSumAggregate?: (
    data: WithTypename<PhoneAuthSumAggregate>
  ) => null | string;
  PhoneConnectOutput?: (
    data: WithTypename<PhoneConnectOutput>
  ) => null | string;
  User?: (data: WithTypename<User>) => null | string;
  UserAvgAggregate?: (data: WithTypename<UserAvgAggregate>) => null | string;
  UserCountAggregate?: (
    data: WithTypename<UserCountAggregate>
  ) => null | string;
  UserMaxAggregate?: (data: WithTypename<UserMaxAggregate>) => null | string;
  UserMinAggregate?: (data: WithTypename<UserMinAggregate>) => null | string;
  UserSumAggregate?: (data: WithTypename<UserSumAggregate>) => null | string;
};

export type GraphCacheResolvers = {
  Query?: {
    anime?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAnimeArgs,
      WithTypename<Anime> | string
    >;
    animes?: GraphCacheResolver<
      WithTypename<Query>,
      QueryAnimesArgs,
      Array<WithTypename<Anime> | string>
    >;
    categorys?: GraphCacheResolver<
      WithTypename<Query>,
      Record<string, never>,
      Array<WithTypename<Category> | string>
    >;
    me?: GraphCacheResolver<
      WithTypename<Query>,
      Record<string, never>,
      WithTypename<User> | string
    >;
  };
  Anime?: {
    _count?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      WithTypename<AnimeCount> | string
    >;
    bannerImage?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    categories?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Array<WithTypename<Category> | string>
    >;
    coverImage?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    description?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    duration?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    endDate?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    episodes?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Array<WithTypename<Episode> | string>
    >;
    format?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      AnimeFormat | string
    >;
    id?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    idAniDB?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idAnilist?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idKitsu?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idMal?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    isAdult?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    popularityAnilist?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    releaseDate?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    scoreAnilist?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    season?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      AnimeSeason | string
    >;
    seasonYear?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      AnimeStatus | string
    >;
    title?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    titleEnglish?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    titleFrench?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    titleKanji?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    titleRomaji?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<Anime>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
  };
  AnimeAvgAggregate?: {
    duration?: GraphCacheResolver<
      WithTypename<AnimeAvgAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<AnimeAvgAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    idAniDB?: GraphCacheResolver<
      WithTypename<AnimeAvgAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    idAnilist?: GraphCacheResolver<
      WithTypename<AnimeAvgAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    idKitsu?: GraphCacheResolver<
      WithTypename<AnimeAvgAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    idMal?: GraphCacheResolver<
      WithTypename<AnimeAvgAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    popularityAnilist?: GraphCacheResolver<
      WithTypename<AnimeAvgAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    scoreAnilist?: GraphCacheResolver<
      WithTypename<AnimeAvgAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    seasonYear?: GraphCacheResolver<
      WithTypename<AnimeAvgAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
  };
  AnimeCount?: {
    categories?: GraphCacheResolver<
      WithTypename<AnimeCount>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    episodes?: GraphCacheResolver<
      WithTypename<AnimeCount>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  AnimeCountAggregate?: {
    _all?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    bannerImage?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    coverImage?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    description?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    duration?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    endDate?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    format?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idAniDB?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idAnilist?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idKitsu?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idMal?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    isAdult?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    popularityAnilist?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    releaseDate?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    scoreAnilist?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    season?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    seasonYear?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    title?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    titleEnglish?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    titleFrench?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    titleKanji?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    titleRomaji?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<AnimeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  AnimeMaxAggregate?: {
    bannerImage?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    coverImage?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    description?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    duration?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    endDate?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    format?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      AnimeFormat | string
    >;
    id?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idAniDB?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idAnilist?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idKitsu?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idMal?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    isAdult?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    popularityAnilist?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    releaseDate?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    scoreAnilist?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    season?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      AnimeSeason | string
    >;
    seasonYear?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      AnimeStatus | string
    >;
    title?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    titleEnglish?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    titleFrench?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    titleKanji?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    titleRomaji?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<AnimeMaxAggregate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
  };
  AnimeMinAggregate?: {
    bannerImage?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    coverImage?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    description?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    duration?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    endDate?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    format?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      AnimeFormat | string
    >;
    id?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idAniDB?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idAnilist?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idKitsu?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idMal?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    isAdult?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    popularityAnilist?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    releaseDate?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    scoreAnilist?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    season?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      AnimeSeason | string
    >;
    seasonYear?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    status?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      AnimeStatus | string
    >;
    title?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    titleEnglish?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    titleFrench?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    titleKanji?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    titleRomaji?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<AnimeMinAggregate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
  };
  AnimeSumAggregate?: {
    duration?: GraphCacheResolver<
      WithTypename<AnimeSumAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<AnimeSumAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idAniDB?: GraphCacheResolver<
      WithTypename<AnimeSumAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idAnilist?: GraphCacheResolver<
      WithTypename<AnimeSumAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idKitsu?: GraphCacheResolver<
      WithTypename<AnimeSumAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    idMal?: GraphCacheResolver<
      WithTypename<AnimeSumAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    popularityAnilist?: GraphCacheResolver<
      WithTypename<AnimeSumAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    scoreAnilist?: GraphCacheResolver<
      WithTypename<AnimeSumAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    seasonYear?: GraphCacheResolver<
      WithTypename<AnimeSumAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  Category?: {
    _count?: GraphCacheResolver<
      WithTypename<Category>,
      Record<string, never>,
      WithTypename<CategoryCount> | string
    >;
    animes?: GraphCacheResolver<
      WithTypename<Category>,
      Record<string, never>,
      Array<WithTypename<Anime> | string>
    >;
    coverImage?: GraphCacheResolver<
      WithTypename<Category>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<Category>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<Category>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  CategoryAvgAggregate?: {
    id?: GraphCacheResolver<
      WithTypename<CategoryAvgAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
  };
  CategoryCount?: {
    animes?: GraphCacheResolver<
      WithTypename<CategoryCount>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  CategoryCountAggregate?: {
    _all?: GraphCacheResolver<
      WithTypename<CategoryCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    coverImage?: GraphCacheResolver<
      WithTypename<CategoryCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<CategoryCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<CategoryCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  CategoryMaxAggregate?: {
    coverImage?: GraphCacheResolver<
      WithTypename<CategoryMaxAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<CategoryMaxAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<CategoryMaxAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  CategoryMinAggregate?: {
    coverImage?: GraphCacheResolver<
      WithTypename<CategoryMinAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<CategoryMinAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<CategoryMinAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  CategorySumAggregate?: {
    id?: GraphCacheResolver<
      WithTypename<CategorySumAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  Episode?: {
    airedDate?: GraphCacheResolver<
      WithTypename<Episode>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    anime?: GraphCacheResolver<
      WithTypename<Episode>,
      Record<string, never>,
      WithTypename<Anime> | string
    >;
    animeId?: GraphCacheResolver<
      WithTypename<Episode>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    arcName?: GraphCacheResolver<
      WithTypename<Episode>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<Episode>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<Episode>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    isFiller?: GraphCacheResolver<
      WithTypename<Episode>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    isRecap?: GraphCacheResolver<
      WithTypename<Episode>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    length?: GraphCacheResolver<
      WithTypename<Episode>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    number?: GraphCacheResolver<
      WithTypename<Episode>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    title?: GraphCacheResolver<
      WithTypename<Episode>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<Episode>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
  };
  EpisodeAvgAggregate?: {
    animeId?: GraphCacheResolver<
      WithTypename<EpisodeAvgAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<EpisodeAvgAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    length?: GraphCacheResolver<
      WithTypename<EpisodeAvgAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    number?: GraphCacheResolver<
      WithTypename<EpisodeAvgAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
  };
  EpisodeCountAggregate?: {
    _all?: GraphCacheResolver<
      WithTypename<EpisodeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    airedDate?: GraphCacheResolver<
      WithTypename<EpisodeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    animeId?: GraphCacheResolver<
      WithTypename<EpisodeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    arcName?: GraphCacheResolver<
      WithTypename<EpisodeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<EpisodeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<EpisodeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    isFiller?: GraphCacheResolver<
      WithTypename<EpisodeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    isRecap?: GraphCacheResolver<
      WithTypename<EpisodeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    length?: GraphCacheResolver<
      WithTypename<EpisodeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    number?: GraphCacheResolver<
      WithTypename<EpisodeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    title?: GraphCacheResolver<
      WithTypename<EpisodeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<EpisodeCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  EpisodeMaxAggregate?: {
    airedDate?: GraphCacheResolver<
      WithTypename<EpisodeMaxAggregate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    animeId?: GraphCacheResolver<
      WithTypename<EpisodeMaxAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    arcName?: GraphCacheResolver<
      WithTypename<EpisodeMaxAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<EpisodeMaxAggregate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<EpisodeMaxAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    isFiller?: GraphCacheResolver<
      WithTypename<EpisodeMaxAggregate>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    isRecap?: GraphCacheResolver<
      WithTypename<EpisodeMaxAggregate>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    length?: GraphCacheResolver<
      WithTypename<EpisodeMaxAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    number?: GraphCacheResolver<
      WithTypename<EpisodeMaxAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    title?: GraphCacheResolver<
      WithTypename<EpisodeMaxAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<EpisodeMaxAggregate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
  };
  EpisodeMinAggregate?: {
    airedDate?: GraphCacheResolver<
      WithTypename<EpisodeMinAggregate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    animeId?: GraphCacheResolver<
      WithTypename<EpisodeMinAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    arcName?: GraphCacheResolver<
      WithTypename<EpisodeMinAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<EpisodeMinAggregate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<EpisodeMinAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    isFiller?: GraphCacheResolver<
      WithTypename<EpisodeMinAggregate>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    isRecap?: GraphCacheResolver<
      WithTypename<EpisodeMinAggregate>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    length?: GraphCacheResolver<
      WithTypename<EpisodeMinAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    number?: GraphCacheResolver<
      WithTypename<EpisodeMinAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    title?: GraphCacheResolver<
      WithTypename<EpisodeMinAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<EpisodeMinAggregate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
  };
  EpisodeSumAggregate?: {
    animeId?: GraphCacheResolver<
      WithTypename<EpisodeSumAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<EpisodeSumAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    length?: GraphCacheResolver<
      WithTypename<EpisodeSumAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    number?: GraphCacheResolver<
      WithTypename<EpisodeSumAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  PhoneAuth?: {
    id?: GraphCacheResolver<
      WithTypename<PhoneAuth>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    phoneNumber?: GraphCacheResolver<
      WithTypename<PhoneAuth>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    user?: GraphCacheResolver<
      WithTypename<PhoneAuth>,
      Record<string, never>,
      WithTypename<User> | string
    >;
    userId?: GraphCacheResolver<
      WithTypename<PhoneAuth>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  PhoneAuthAvgAggregate?: {
    id?: GraphCacheResolver<
      WithTypename<PhoneAuthAvgAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
    userId?: GraphCacheResolver<
      WithTypename<PhoneAuthAvgAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
  };
  PhoneAuthCountAggregate?: {
    _all?: GraphCacheResolver<
      WithTypename<PhoneAuthCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<PhoneAuthCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    phoneNumber?: GraphCacheResolver<
      WithTypename<PhoneAuthCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    userId?: GraphCacheResolver<
      WithTypename<PhoneAuthCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  PhoneAuthMaxAggregate?: {
    id?: GraphCacheResolver<
      WithTypename<PhoneAuthMaxAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    phoneNumber?: GraphCacheResolver<
      WithTypename<PhoneAuthMaxAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    userId?: GraphCacheResolver<
      WithTypename<PhoneAuthMaxAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  PhoneAuthMinAggregate?: {
    id?: GraphCacheResolver<
      WithTypename<PhoneAuthMinAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    phoneNumber?: GraphCacheResolver<
      WithTypename<PhoneAuthMinAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    userId?: GraphCacheResolver<
      WithTypename<PhoneAuthMinAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  PhoneAuthSumAggregate?: {
    id?: GraphCacheResolver<
      WithTypename<PhoneAuthSumAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    userId?: GraphCacheResolver<
      WithTypename<PhoneAuthSumAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  PhoneConnectOutput?: {
    doesUserExists?: GraphCacheResolver<
      WithTypename<PhoneConnectOutput>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    user?: GraphCacheResolver<
      WithTypename<PhoneConnectOutput>,
      Record<string, never>,
      WithTypename<User> | string
    >;
  };
  User?: {
    PhoneAuth?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      WithTypename<PhoneAuth> | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    username?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  UserAvgAggregate?: {
    id?: GraphCacheResolver<
      WithTypename<UserAvgAggregate>,
      Record<string, never>,
      Scalars["Float"] | string
    >;
  };
  UserCountAggregate?: {
    _all?: GraphCacheResolver<
      WithTypename<UserCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    createdAt?: GraphCacheResolver<
      WithTypename<UserCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<UserCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<UserCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    username?: GraphCacheResolver<
      WithTypename<UserCountAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
  UserMaxAggregate?: {
    createdAt?: GraphCacheResolver<
      WithTypename<UserMaxAggregate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<UserMaxAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<UserMaxAggregate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    username?: GraphCacheResolver<
      WithTypename<UserMaxAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  UserMinAggregate?: {
    createdAt?: GraphCacheResolver<
      WithTypename<UserMinAggregate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<UserMinAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    updatedAt?: GraphCacheResolver<
      WithTypename<UserMinAggregate>,
      Record<string, never>,
      Scalars["DateTime"] | string
    >;
    username?: GraphCacheResolver<
      WithTypename<UserMinAggregate>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  UserSumAggregate?: {
    id?: GraphCacheResolver<
      WithTypename<UserSumAggregate>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
  };
};

export type GraphCacheOptimisticUpdaters = {
  logout?: GraphCacheOptimisticMutationResolver<
    Record<string, never>,
    Scalars["Boolean"]
  >;
  phoneAskConfirmationCode?: GraphCacheOptimisticMutationResolver<
    MutationPhoneAskConfirmationCodeArgs,
    Scalars["Boolean"]
  >;
  phoneConnect?: GraphCacheOptimisticMutationResolver<
    MutationPhoneConnectArgs,
    WithTypename<PhoneConnectOutput>
  >;
  phoneRegister?: GraphCacheOptimisticMutationResolver<
    MutationPhoneRegisterArgs,
    WithTypename<User>
  >;
};

export type GraphCacheUpdaters = {
  Mutation?: {
    logout?: GraphCacheUpdateResolver<
      { logout: Scalars["Boolean"] },
      Record<string, never>
    >;
    phoneAskConfirmationCode?: GraphCacheUpdateResolver<
      { phoneAskConfirmationCode: Scalars["Boolean"] },
      MutationPhoneAskConfirmationCodeArgs
    >;
    phoneConnect?: GraphCacheUpdateResolver<
      { phoneConnect: WithTypename<PhoneConnectOutput> },
      MutationPhoneConnectArgs
    >;
    phoneRegister?: GraphCacheUpdateResolver<
      { phoneRegister: WithTypename<User> },
      MutationPhoneRegisterArgs
    >;
  };
  Subscription?: {};
};

export type GraphCacheConfig = {
  schema?: IntrospectionData;
  updates?: GraphCacheUpdaters;
  keys?: GraphCacheKeysConfig;
  optimistic?: GraphCacheOptimisticUpdaters;
  resolvers?: GraphCacheResolvers;
  storage?: GraphCacheStorageAdapter;
};

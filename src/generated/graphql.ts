import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Ctx } from '../types';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};


export type Tweet = {
  __typename?: 'Tweet';
  id: Scalars['ID'];
  texts?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  likes?: Maybe<Scalars['Int']>;
  retweets?: Maybe<Scalars['Int']>;
  replys?: Maybe<Array<Maybe<Tweet>>>;
  created_at: Scalars['Date'];
};

export type Dm = {
  __typename?: 'DM';
  roomId: Scalars['ID'];
  messages: Scalars['String'];
  fromUserId: Scalars['String'];
  created_at: Scalars['Date'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  phoneNumber: Scalars['Int'];
  birth: Scalars['Date'];
  password: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
  profileImage?: Maybe<Scalars['String']>;
  headerImage?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  tweets?: Maybe<Array<Maybe<Tweet>>>;
  likes?: Maybe<Array<Maybe<Tweet>>>;
  following?: Maybe<Array<Maybe<User>>>;
  followers?: Maybe<Array<Maybe<User>>>;
  muteUsers?: Maybe<Array<Maybe<User>>>;
  blockUsers?: Maybe<Array<Maybe<User>>>;
  isPrivate: Scalars['Boolean'];
  DMs?: Maybe<Array<Maybe<Dm>>>;
};

export type ErrorHandler = {
  __typename?: 'ErrorHandler';
  message: Scalars['String'];
};

export type ReturnResult = User | ErrorHandler;

export type Query = {
  __typename?: 'Query';
  tweets?: Maybe<Tweet>;
  tweet?: Maybe<Tweet>;
  getUser?: Maybe<User>;
  me?: Maybe<User>;
};


export type QueryTweetsArgs = {
  followingIds: Array<Maybe<Scalars['ID']>>;
};


export type QueryTweetArgs = {
  id: Scalars['ID'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<ReturnResult>;
  signin?: Maybe<ReturnResult>;
  logout?: Maybe<Scalars['Boolean']>;
};


export type MutationLoginArgs = {
  LoginInfo: LoginInfo;
  password: Scalars['String'];
};


export type MutationSigninArgs = {
  SigninInfo: SigninInfo;
  password: Scalars['String'];
};

export type LoginInfo = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['Int']>;
};

export type SigninInfo = {
  username: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['Int'];
  birth: Scalars['Date'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Tweet: ResolverTypeWrapper<Tweet>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  DM: ResolverTypeWrapper<Dm>;
  User: ResolverTypeWrapper<User>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ErrorHandler: ResolverTypeWrapper<ErrorHandler>;
  ReturnResult: ResolversTypes['User'] | ResolversTypes['ErrorHandler'];
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  LoginInfo: LoginInfo;
  SigninInfo: SigninInfo;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Date: Scalars['Date'];
  Tweet: Tweet;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Int: Scalars['Int'];
  DM: Dm;
  User: User;
  Boolean: Scalars['Boolean'];
  ErrorHandler: ErrorHandler;
  ReturnResult: ResolversParentTypes['User'] | ResolversParentTypes['ErrorHandler'];
  Query: {};
  Mutation: {};
  LoginInfo: LoginInfo;
  SigninInfo: SigninInfo;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type TweetResolvers<ContextType = Ctx, ParentType extends ResolversParentTypes['Tweet'] = ResolversParentTypes['Tweet']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  texts?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  likes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  retweets?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  replys?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tweet']>>>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DmResolvers<ContextType = Ctx, ParentType extends ResolversParentTypes['DM'] = ResolversParentTypes['DM']> = ResolversObject<{
  roomId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  messages?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fromUserId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = Ctx, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  birth?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profileImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  headerImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tweets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tweet']>>>, ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tweet']>>>, ParentType, ContextType>;
  following?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  muteUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  blockUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  isPrivate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  DMs?: Resolver<Maybe<Array<Maybe<ResolversTypes['DM']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorHandlerResolvers<ContextType = Ctx, ParentType extends ResolversParentTypes['ErrorHandler'] = ResolversParentTypes['ErrorHandler']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReturnResultResolvers<ContextType = Ctx, ParentType extends ResolversParentTypes['ReturnResult'] = ResolversParentTypes['ReturnResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'User' | 'ErrorHandler', ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Ctx, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  tweets?: Resolver<Maybe<ResolversTypes['Tweet']>, ParentType, ContextType, RequireFields<QueryTweetsArgs, 'followingIds'>>;
  tweet?: Resolver<Maybe<ResolversTypes['Tweet']>, ParentType, ContextType, RequireFields<QueryTweetArgs, 'id'>>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Ctx, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  login?: Resolver<Maybe<ResolversTypes['ReturnResult']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'LoginInfo' | 'password'>>;
  signin?: Resolver<Maybe<ResolversTypes['ReturnResult']>, ParentType, ContextType, RequireFields<MutationSigninArgs, 'SigninInfo' | 'password'>>;
  logout?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Ctx> = ResolversObject<{
  Date?: GraphQLScalarType;
  Tweet?: TweetResolvers<ContextType>;
  DM?: DmResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  ErrorHandler?: ErrorHandlerResolvers<ContextType>;
  ReturnResult?: ReturnResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Ctx> = Resolvers<ContextType>;

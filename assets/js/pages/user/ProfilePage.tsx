import { ArticleCard } from "@/components/ArticleCard";
import { Article, CommonPageProps, User } from "@/types";
import { Link } from "@inertiajs/react";
import { Cog, Plus } from "lucide-react";
import React from "react";

interface Props extends CommonPageProps {
  profile: User;
  following: boolean;
  articles: Article[];
}

export default function ProfilePage(props: Props) {
  const { user, profile, following } = props;
  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src={profile.image} className="user-img" />
              <h4>{profile.username}</h4>
              <p>{profile.bio}</p>
              {user && user.id == profile.id ? (
                <Link
                  className="btn btn-sm btn-outline-secondary action-btn"
                  href="/user"
                >
                  <Cog className="inline h-[1rem]" />
                  Edit Profile Settings
                </Link>
              ) : following ? (
                <button className="btn btn-sm btn-outline-secondary action-btn">
                  <Plus className="inline h-[1rem]" />
                  Unfollow {profile.username}
                </button>
              ) : (
                <button className="btn btn-sm btn-outline-secondary action-btn">
                  <Plus className="inline h-[1rem]" />
                  Follow {profile.username}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <span
                    role="button"
                    className={
                      "nav-link #{active_class(:my_articles, @active_view)}"
                    }
                    phx-click="my-articles"
                  >
                    My Articles
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    role="button"
                    className={
                      "nav-link #{active_class(:my_favourite_articles, @active_view)}"
                    }
                    phx-click="my-favourite-articles"
                  >
                    Favorited Articles
                  </span>
                </li>
              </ul>
            </div>

            {props.articles.map((article) => (
              <ArticleCard article={article} key={article.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

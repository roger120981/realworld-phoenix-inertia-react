import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
// import { GlobalArticleList } from "@/components/global-articles-list";
import { TagList } from "@/components/tag-list";
import { Article, CommonPageProps } from "@/types";

interface Props extends CommonPageProps {
  articles: Article[];
  tab?: "yours" | "global" | "tag";
  tag?: string;
  tags: string[];
}

const GlobalArticleList = (props) => {
  return <div>Global Article List here</div>;
};

export default function RealWorldHome(props: Props) {
  const user = props.user;
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                {user && (
                  <li className="nav-item">
                    <Link
                      className={cn(
                        "nav-link",
                        props.tab === "yours" && "active"
                      )}
                      href="/?tab=yours"
                    >
                      Your Feed
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link
                    className={cn(
                      "nav-link",
                      props.tab === "global" && "active"
                    )}
                    href="/?tab=global"
                  >
                    Global Feed
                  </Link>
                </li>
                {props.tag && (
                  <li className="nav-item">
                    <Link
                      className={cn(
                        "nav-link",
                        props.tab === "tag" && "active"
                      )}
                      href={`/?tab=tag&tag=${props.tag}`}
                    >
                      #{props.tag}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <GlobalArticleList />
          </div>

          <div className="col-md-3">
            <TagList tags={props.tags} />
          </div>
        </div>
      </div>
    </div>
  );
}

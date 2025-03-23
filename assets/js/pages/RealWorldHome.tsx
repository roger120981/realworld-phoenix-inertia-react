import React from "react";
import { cn } from "@/lib/utils";
import { Link, router } from "@inertiajs/react";
import { GlobalArticleList } from "@/components/GlobalArticlesList";
import { TagList } from "@/components/TagList";
import { Article, CommonPageProps } from "@/types";

interface Page<T> {
  results: T[];
  limit: number;
  offset: number;
  count: number;
  hasMore: boolean;
  pages: number;
  page: number;
}

interface Props extends CommonPageProps {
  articles: Page<Article>;
  tab?: "yours" | "global" | "tag";
  tag?: string;
  tags: string[];
}

const Banner = () => (
  <div className="banner">
    <div className="container">
      <h1 className="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>
);

const Tabs = ({ user, tab, tag }: Pick<Props, "user" | "tab" | "tag">) => (
  <div className="feed-toggle">
    <ul className="nav nav-pills outline-active">
      {user && (
        <li className="nav-item">
          <Link
            className={cn("nav-link", tab === "yours" && "active")}
            href="/"
            data={{ tab: "yours" }}
          >
            Your Feed
          </Link>
        </li>
      )}
      <li className="nav-item">
        <Link
          className={cn("nav-link", tab === "global" && "active")}
          href="/"
          data={{ tab: "global" }}
        >
          Global Feed
        </Link>
      </li>
      {tag && (
        <li className="nav-item">
          <Link
            className={cn("nav-link", tab === "tag" && "active")}
            href={"/"}
            data={{ tab: "tag", tag: tag }}
          >
            #{tag}
          </Link>
        </li>
      )}
    </ul>
  </div>
);

const Pagination = (props: Pick<Props, "articles">) => (
  <nav>
    <ul className="pagination">
      {Array.from(Array(props.articles.pages).keys())
        .map((x) => x + 1)
        .map((page) => (
          <li className={"page-item"} key={`page-${page}`}>
            <button
              type="button"
              className="page-link"
              onClick={() =>
                router.reload({
                  data: { page: page },
                  only: ["articles"],
                })
              }
            >
              {page}
            </button>
          </li>
        ))}
    </ul>
  </nav>
);

export default function RealWorldHome(props: Props) {
  return (
    <div className="home-page">
      {!props.user && <Banner />}

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <Tabs user={props.user} tag={props.tag} tab={props.tab} />
            <GlobalArticleList articles={props.articles.results} />
          </div>

          <div className="col-md-3">
            <TagList tags={props.tags} />
          </div>

          <Pagination articles={props.articles} />
        </div>
      </div>
    </div>
  );
}

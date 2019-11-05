import React from "react";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { Layout } from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

import {
  PagingInfo,
  ResultsPerPage,
  Paging,
  Facet,
  SearchProvider,
  Results,
  SearchBox,
  Sorting
} from "@elastic/react-search-ui";

const connector = new AppSearchAPIConnector({
  searchKey: "search-os4vmjapkfyt5ifc1e6xugmb",
  engineName: "video-games",
  hostIdentifier: "host-9fu79r",
});

const configurationOptions = {
  apiConnector: connector,
  searchQuery: {
    search_fields: {
      name: {} 
    },
    result_fields: {
      name: {
         snippet: {
            size: 75,
            fallback: true
         } 
      }, 
      genre: {
         snippet: {
           size: 50,
           fallback: true
         } 
      },
      publisher: {
         snippet: {
           size: 50,
           fallback: true
         } 
      },
      critic_score: {
        raw: {} 
      },
      platform: {
        snippet: {
          size: 50,
          fallback: true
        } 
      },
      image_url: {
        raw: {} 
      }
    },
    facets: {
      user_score: {
        type: "range",
        ranges: [
          { from: 0, to: 5, name: "Not good" },
	  { from: 5, to: 7, name: "Not bad" },
	  { from: 7, to: 9, name: "Pretty good" },
          { from: 9, to: 10, name: "Must play!" }
        ]
      },
      critic_score: {
        type: "range",
        ranges: [
          { from: 0, to: 50, name: "Not good" },
	  { from: 50, to: 70, name: "Not bad" },
	  { from: 70, to: 90, name: "Pretty good" },
	  { from: 90, to: 100, name: "Must play!" }
        ]
      },
      genre: { type: "value", size: 100 },
      publisher: { type: "value", size: 100},
      platform: { type: "value", size: 100}
    }
  }
};

export default function App() {
  return (
    <SearchProvider config={configurationOptions}>
      <div className="App">
        <Layout header={<SearchBox />} bodyContent={<Results titleField="name"  urlField="image_url" />} />
      </div>
    </SearchProvider>
  );
}

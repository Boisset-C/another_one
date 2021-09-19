import React, { useState, useEffect } from "react";
import { ArchiveCardEvent } from "../../../../components/cards/archiveCardEvent/ArchiveCardEvent";
import "./archiveReplaySection.scss";
// import { ArchiveReplayCardOne } from "../../../../data/ArchivePageData";

export function ArchiveReplaySection() {
  const [videos, setVideos] = useState([
    {
      uri: "videos/0",
      name: "Loading...",
      description: "Loading...",
      embed: { html: "<p>loading..</p>" },
    },
  ]);
  useEffect(() => {
    fetch(
      "https://api.vimeo.com/users/122555139/albums/8613448/videos?sort=alphabetical&direction=asc",
      {
        method: "GET",
        headers: {
          Authorization:
            "basic MTI1MGZkNjA0ODE0Y2U3ODM0MTVkYzUyYTA2ZTQ0NTg0NzYyNzgxNzoxUjZldDBtM0o1UGZuV0ltdUFrT0tLWVVlSUZDZlh2bEx5dXNjYUwzM2JBOGRReUdjNWJ3ZTBHRHFLWnhLanRBS3BRK1VUMUE5VUxFNmdiODFyZ0wyRHg5S2MySWZ6TEFYbktNRk9SVDJOZkE2QTFnajh1OXRzSnF3VTBxbkNIcw==",
        },
      }
    )
      .then((r) => {
        return r.json();
      })
      .then((j) => {
        console.log(j);
        setVideos(j.data);
      });
  }, []);

  return (
    <section className="archive-replay-section">
      <ul>
        {videos.map((v) => (
          <li key={v.uri}>
            <ArchiveCardEvent
              name={v.name}
              description={v.description}
              iframe={{ __html: v.embed.html }}
            />
          </li>
        ))}
      </ul>
    </section>
  );

  // return (
  //   <section class="archive-replay-section">
  //     <h3 class="archive-replay-header">Catch a replay</h3>
  //     <section className="archive-cards-wrapper">
  //       {/* <ul>
  //       {vimeoShowcase.uri.map((uri) => (
  //         <li>{uri}</li>
  //       ))}
  //     </ul> */}

  //       <ArchiveCardEvent
  //         header={ArchiveReplayCardOne.header}
  //         description={ArchiveReplayCardOne.description}
  //         guestNameOne={ArchiveReplayCardOne.guestNameOne}
  //         guestBioOne={ArchiveReplayCardOne.guestBioOne}
  //         guestNameTwo={ArchiveReplayCardOne.guestNameTwo}
  //         guestBioTwo={ArchiveReplayCardOne.guestBioTwo}
  //         url={ArchiveReplayCardOne.url}
  //       />
  //     </section>
  //   </section>
  // );
}

// const [apiResult, setApiResult] = useState({
//   user: [{ name: "Loading..." }],
// });
// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState(null);

// const fetchShowcaseHandler = useCallBack(async () => {
//   setIsLoading(true);
//   setError(null);
//   try {
//     const response = await fetch(
//       "https://api.vimeo.com/users/122555139/albums/8613448",
//       {
//         method: "GET",
//         headers: {
//           Authorization:
//             "basic MTI1MGZkNjA0ODE0Y2U3ODM0MTVkYzUyYTA2ZTQ0NTg0NzYyNzgxNzoxUjZldDBtM0o1UGZuV0ltdUFrT0tLWVVlSUZDZlh2bEx5dXNjYUwzM2JBOGRReUdjNWJ3ZTBHRHFLWnhLanRBS3BRK1VUMUE5VUxFNmdiODFyZ0wyRHg5S2MySWZ6TEFYbktNRk9SVDJOZkE2QTFnajh1OXRzSnF3VTBxbkNIcw==",
//         },
//       }
//     );
//     if (!response.ok) {
//       throw new Error("something went wrong!");
//     }

//     const data = await response.json();

//     const transformedShowcase = data.pictures.sizes.map((videoData) => {
//       return {
//         title: videoData.title,
//         description: videoData.description,
//         link: videoData.link_with_play_button,
//       };
//     });
//     setApiResult(transformedShowcase);
//   } catch (error) {
//     setError(error.message);
//   }
//   setIsLoading(false);
// }, []);

// useEffect(() => {
//   fetchShowcaseHandler();
// }, [fetchShowcaseHandler]);

// let content = <p>found no videos.</p>;

// if (error) {
//   content = <p>{error}</p>;
// }

// if (isLoading) {
//   content = <p>Loading...</p>;
// }

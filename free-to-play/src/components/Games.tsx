import React, { useRef } from "react";
import Game from "./Game";
import { IGame } from "../interface/IGame";
import useGames from "../hooks/useGames";
import Pagination from "./common/Pagination";
import usePagination from "../hooks/usePagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faSpinner } from "@fortawesome/free-solid-svg-icons";

const Games = () => {
  const { isLoading, games } = useGames("/games");
  const gamesPerPages = useRef(8);

  const {
    currentItems,
    currentPage,
    moveNextPage,
    movePreviousPage,
    totalPages,
  } = usePagination({
    items: games!,
    itemsPerPages: gamesPerPages.current,
  });

  return (
    <>
      {!isLoading ? (
        <>
          <div className="title">
            <h3>
              <FontAwesomeIcon icon={faGamepad} color="white" className="icon"/>
              All Games
            </h3>
          </div>
          <hr />
          <div className="pt-4 row justify-content-center">
            {currentItems?.map((game: IGame) => {
              return <Game key={game.id} game={game} />;
            })}
          </div>

          <Pagination
            moveNextPage={moveNextPage}
            movePreviousPage={movePreviousPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </>
      ) : (
        <div className="row">
          <div className="col-12 text-center">
            <FontAwesomeIcon icon={faSpinner} spin color="white" />
          </div>
        </div>
      )}
    </>
  );
};

export default Games;

import axios from "../axiosApi";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Pages({ data }) {
  console.log("data in [id]", data);

  const [config, setConfig] = useState({
    counterFirst: 1,
    counterMax: 10,
    counterVisible: 5,
    counterForShowFirstPagin: 3,
  });
  const renderPagination = () => {
    // для появления 1 пагинации и кнопки троеточия
    let paginationsArr = [];
    if (config.counterFirst > config.counterForShowFirstPagin) {
      paginationsArr.push(
        <div
          className="pagination pagination__visible"
          key={1}
          onClick={() =>
            setConfig({
              ...config,
              counterFirst: 1,
              counterMax: 10,
              counterVisible: 5,
            })
          }
        >
          {1}
        </div>
      );
      paginationsArr.push(
        <div className="pagination " key={"s" + 1}>
          ...
        </div>
      );
    }
    for (let i = config.counterFirst; i <= config.counterMax; i++) {
      if (i < config.counterVisible) {
        paginationsArr.push(
          <div
            className="pagination pagination__visible"
            key={i}
            onClick={() => {
              setConfig({
                ...config,
                counterFirst: config.counterFirst - 1,
                counterMax: config.counterMax - 1,
                counterVisible: config.counterVisible - 1,
              });
            }}
          >
            {i}
          </div>
        );
      }
      if (i === config.counterVisible && i !== data.count) {
        paginationsArr.push(
          <div
            className="pagination pagination__visible pagination__clicked "
            key={i}
            onClick={() =>
              setConfig({
                ...config,
                counterFirst: config.counterFirst + 1,
                counterMax: config.counterMax + 1,
                counterVisible: config.counterVisible + 1,
              })
            }
          >
            {i}
          </div>
        );
        paginationsArr.push(
          <div className="pagination " key={i + 1}>
            ...
          </div>
        );
      }
      if (i === config.counterMax) {
        const lastPagination = data.count;
        paginationsArr.push(
          <div className="pagination" key={lastPagination}>
            {lastPagination}
          </div>
        );
        break;
      }
    }
    console.log("counter");
    return paginationsArr;
  };
  return (
    <>
      counterFirst:{config.counterFirst}/ counterMax:{config.counterMax}/
      counterVisible:{config.counterVisible}
      <div className="pagination__wrapper">{renderPagination()}</div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const response = await axios.get(`/${params.id}`);
  return { props: { data: response.data } };
}

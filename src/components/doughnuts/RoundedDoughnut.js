import React, { memo } from "react";
import { Doughnut } from "react-chartjs-2";
import Loader from "../Loader/loader";
import "./Doughnuts.css";

const RoundedDoughnut = ({
  RoundedData,
  RoundedOptions,
  percentage,
  text_total,
  plugins,
  loader,
  isLoading,
  isFetching,
  persymbol,
}) => {

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="rounded-doughnut" style={{ position: "relative" }}>
          <div className="rounded-doughnut-percentage">
            <p
              style={{
                color: `${RoundedData?.datasets?.[0]?.backgroundColor?.find(
                  (color, i) =>
                    i ==
                    RoundedData?.datasets?.[0]?.data?.indexOf(
                      Math.max(...RoundedData?.datasets?.[0]?.data)
                    )
                )}`,
                fontSize: "16px",
                // whiteSpace: "pre-wrap",
                // marginTop: "-6px",
              }}
            >
              <span style={{ color: "black" }}>{text_total}</span>
              <br />
              {`${percentage}${persymbol ? "%" : ""}`}
            </p>
          </div>
          <Doughnut
            data={RoundedData}
            options={RoundedOptions}
            plugins={plugins}
          />
        </div>
      )}
    </>
  );
};

export default memo(RoundedDoughnut);

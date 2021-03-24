import React, { useEffect, useState, } from 'react'
import { getNetwork } from "../../../../actions/networkEntryAction";
import { Doughnut } from "react-chartjs-2";
import { useDispatch} from "react-redux";
import Spinner from "../../../../helpers/spinner";

const NetworkEntryChart = ({campaign_id}) => {
 //charts data state
  const [chartdata, setchartdata] = useState({
    labels: "",
    datasets: [
      {
        label: "",
        data: "",
        backgroundColor: "",
        borderColor: "",
      },
    ],
    borderWidth: "",
  });
  //redux implementations
  const dispatch = useDispatch();
  const [isloading, setisloading] = useState(false);

  useEffect(() => {
    setisloading(true);
    dispatch(getNetwork(campaign_id)).then((da) => {
        setchartdata({
          labels: da.labels,
          datasets: [
            {
              label: da.datasets.label,
              data: da.datasets.data,
              backgroundColor: da.datasets.backgroundColor,
              borderColor: da.datasets.borderColor,
            },
          ],
          borderWidth: da.borderWidth,
        });
        setisloading(false);
      });
  },[])
  return (
    <>
       {isloading && <Spinner />}
       {!isloading && (
      <Doughnut data={chartdata} />
      )}
    </>
  )
}

export default NetworkEntryChart
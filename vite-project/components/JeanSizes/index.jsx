/* eslint-disable react/prop-types */
const JeanSizes = ({ item }) => {
    const availableSizes = item?.sizes?.map(sizeObj => sizeObj.size).join(" / ");

    return (
      <>
        <span>Talles disponibles: </span>
        <span>{availableSizes} </span>
      </>
    );
  };
export default JeanSizes;  
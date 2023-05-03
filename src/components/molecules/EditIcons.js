import {useRouter} from 'next/router';
import React from 'react';
import {FaEdit, FaEye, FaEyeSlash, FaHeart, FaHeartBroken, FaUndo} from 'react-icons/fa';
import {SpinnerCircularFixed} from 'spinners-react';
import TrashIconWithConfirmation from "../atoms/TrashIconWithConfirmation";

function EditIcons({
                     itemData,
                     itemVisibility,
                     edit,
                     handleEdit,
                     reset,
                     bestseller,
                     isBestseller,
                     handleBestseller,
                     visibility,
                     handleVisibility,
                     remove,
                     handleRemove,
                     loading,
                   }) {
  const router = useRouter();

  return (
    <div className="is-flex is-justify-content-center is-align-items-center">

      {edit && !loading ? (
        <span className="icon is-clickable is-size-4 mx-1" onClick={handleEdit}>
          <FaEdit/>
        </span>
      ) : null}

      {reset && !loading ? (
        <span className="icon is-clickable is-size-5 mx-1" onClick={handleEdit}>
          <FaUndo/>
        </span>
      ) : null}

      {visibility && !loading ? (
        <span
          className="icon is-clickable is-size-4 mx-1"
          onClick={() => handleVisibility(itemData)}>
            {itemVisibility ? <FaEye/> : <FaEyeSlash/>}
        </span>
      ) : null}

      {loading ? (
          <span className="icon is-clickable is-size-4 mx-1">
            <SpinnerCircularFixed size={24} thickness={200} speed={120} color="#BC1725" secondaryColor="#082333"/>
        </span>)
        : null}

      {bestseller && !loading ? (
        <span
          className="icon is-clickable is-size-4 mx-1"
          onClick={handleBestseller}>
            {isBestseller ? <FaHeart/> : <FaHeartBroken/>}
        </span>
      ) : null}

      {remove && !loading ? (
        <span
          className="icon is-clickable is-size-6 mx-1"
          id={itemData}>
          <TrashIconWithConfirmation deletedFunction={() => handleRemove(itemData)}/>
        </span>
      ) : null}
    </div>
  );
}

export default EditIcons;

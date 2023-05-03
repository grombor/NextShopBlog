import {v4 as uuidv4} from "uuid";
import Cookies from 'js-cookie';

const getAnonymousUserId = () => {
  const anonymousUserId = Cookies.get('anonymousOwnerId');
  if (anonymousUserId !== undefined) {
    return anonymousUserId
  } else {
    const uuid = uuidv4();
    Cookies.set('anonymousOwnerId', uuid, { expires: 365 }); // ważność ciasteczka przez 7 dni
    return uuid
  }
}

const CartService = {
  getAnonymousUserId
};

export default CartService;
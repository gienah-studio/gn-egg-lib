import GNEnum from '../gn-enum';

export default class GN_AUTHORIZE_ROLE extends GNEnum<number> {
  public static ADMIN_USER = new GN_AUTHORIZE_ROLE(0);
  public static INDIVIDUAL_USER = new GN_AUTHORIZE_ROLE(1 << 0);
}

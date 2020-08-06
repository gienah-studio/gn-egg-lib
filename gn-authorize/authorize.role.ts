import GNEnum from '../gn-enum';

export default class GN_AUTHORIZE_ROLE extends GNEnum<number> {
  public static ADMIN_USER = new GN_AUTHORIZE_ROLE(1);
  public static NORMAL_USER = new GN_AUTHORIZE_ROLE(1 << 1);
}

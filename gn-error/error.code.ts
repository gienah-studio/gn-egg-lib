import GNEnum from '../gn-enum';

export default class GN_ERROR_CODE extends GNEnum<string> {
  public static SUCCESS = new GN_ERROR_CODE('00000');
  public static UNKNOWN_ERROR = new GN_ERROR_CODE('00001');
  public static NETWORK_ERROR = new GN_ERROR_CODE('00002');
  public static INTERNAL_SERVER_ERROR = new GN_ERROR_CODE('00003');
  public static CACHE_ERROR = new GN_ERROR_CODE('00004');
  public static DATABASE_ERROR = new GN_ERROR_CODE('00005');
  public static CREATE_TRANSACTION_ERROR = new GN_ERROR_CODE('00006');
  public static HTTP_GET_ERROR = new GN_ERROR_CODE('00007');
  public static HTTP_POST_ERROR = new GN_ERROR_CODE('00008');
  public static JWT_GENERATION_ERROR = new GN_ERROR_CODE('00009');

  public static TOO_MANY_REQUEST = new GN_ERROR_CODE('10001');
  public static UNAUTHORIZED = new GN_ERROR_CODE('10002');
  public static UNPROCESSABLE_ENTITY = new GN_ERROR_CODE('10003');
}

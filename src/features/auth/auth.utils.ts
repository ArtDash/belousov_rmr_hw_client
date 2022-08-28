export class ValidationRegExp {
  public static readonly PHONE = /((\+7|\+976)+(([0-9]){10}))/;
  public static readonly EMAIL =
    /^[A-Za-z0-9._+\-']+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  public static readonly PASSWORD =
    /^.*(?=.{4,})(?=[a-zA-Z0-9~@#$^*()_+=[\]{}|\\,.?: -]*$)(?!.*[<>'"/;`%]).*$/;
}

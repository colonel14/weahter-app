export class WeatherItem {
  constructor(
    public cityName: string,
    public temprature: number,
    public weatherCondition: string,
    public minTmp: number,
    public maxTmp: number
  ) {}
}

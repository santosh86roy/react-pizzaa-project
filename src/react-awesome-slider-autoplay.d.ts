declare module "react-awesome-slider/dist/autoplay" {
  import { AwesomeSliderProps } from "react-awesome-slider";

  export default function withAutoplay(
    Component: React.ComponentType<AwesomeSliderProps>
  ): React.ComponentType<
    AwesomeSliderProps & {
      play?: boolean;
      cancelOnInteraction?: boolean;
      interval?: number;
    }
  >;
}

import { useRive } from "@rive-app/react-canvas"
type Props = {
    className?: string
}

export const Eye = (props: Props) => {
    const { rive, RiveComponent } = useRive({
        src: "/eye.riv",
        autoplay: true,
    });
    return (
        <RiveComponent
            onMouseEnter={() => rive && rive.play()}
            onMouseLeave={() => rive && rive.pause()}
            className={props.className}
        />
    );
}
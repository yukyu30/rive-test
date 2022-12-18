import { useRive } from "@rive-app/react-canvas"

export const Eye = () => {
    const { RiveComponent } = useRive({
        src: "/eye.riv",
        autoplay: true,
        stateMachines: "State Machine 1" /* ステートマシンの名前が必須っぽい */
    });
    return (
        <RiveComponent />
    );
}
/**
 * Custom Package to declare a namespace
 */
//% weight=110 color=#ff00ff icon="\uf079"
namespace TaiBit {
    export enum Directions {
        Clockwise = 0x1,
        CounterClockwise = 0x2
    }

    /**
      * Show arrows clockwise or counterclockwise
      * @param mode describe parameter here, eg: Clockwise, CounterClockwise
      * @param speed describe parameter here, eg: 1000
    */
    //% weight=100 blockId="id_showArrow" block="show arrows direction | %mode | speed display(ms) | %speed"
    export function fn_showArrow(mode: Directions, speed: number): void {
        if (mode == 1) {
            images.arrowImage(ArrowNames.North).showImage(0)
            basic.pause(speed)
            images.arrowImage(ArrowNames.NorthEast).showImage(0)
            basic.pause(speed)
            images.arrowImage(ArrowNames.East).showImage(0)
            basic.pause(speed)
            images.arrowImage(ArrowNames.SouthEast).showImage(0)
            basic.pause(speed)
            images.arrowImage(ArrowNames.South).showImage(0)
            basic.pause(speed)
            images.arrowImage(ArrowNames.SouthWest).showImage(0)
            basic.pause(speed)
            images.arrowImage(ArrowNames.West).showImage(0)
            basic.pause(speed)
            images.arrowImage(ArrowNames.NorthWest).showImage(0)
            basic.pause(speed)
        } else {
            images.arrowImage(ArrowNames.NorthWest).showImage(0)
            basic.pause(speed)
            images.arrowImage(ArrowNames.West).showImage(0)
            basic.pause(speed)
            images.arrowImage(ArrowNames.SouthWest).showImage(0)
            basic.pause(speed)
            images.arrowImage(ArrowNames.South).showImage(0)
            basic.pause(speed)
            images.arrowImage(ArrowNames.SouthEast).showImage(0)
            basic.pause(speed)
            images.arrowImage(ArrowNames.East).showImage(0)
            basic.pause(speed)
            images.arrowImage(ArrowNames.NorthEast).showImage(0)
            basic.pause(speed)
            images.arrowImage(ArrowNames.North).showImage(0)
            basic.pause(speed)
        }
    }
}

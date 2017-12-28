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
    */
    //% weight=100 blockId="id_showArrow" block="show arrows direction | %mode"
    export function fn_showArrow(mode: Directions): void {
        if (mode == 1) {
            images.arrowImage(ArrowNames.North).showImage(0)
            basic.pause(1000)
            images.arrowImage(ArrowNames.NorthEast).showImage(0)
            basic.pause(1000)
            images.arrowImage(ArrowNames.East).showImage(0)
            basic.pause(1000)
            images.arrowImage(ArrowNames.SouthEast).showImage(0)
            basic.pause(1000)
            images.arrowImage(ArrowNames.South).showImage(0)
            basic.pause(1000)
            images.arrowImage(ArrowNames.SouthWest).showImage(0)
            basic.pause(1000)
            images.arrowImage(ArrowNames.West).showImage(0)
            basic.pause(1000)
            images.arrowImage(ArrowNames.NorthWest).showImage(0)
            basic.pause(1000)
        } else {
            images.arrowImage(ArrowNames.NorthWest).showImage(0)
            basic.pause(1000)
            images.arrowImage(ArrowNames.West).showImage(0)
            basic.pause(1000)
            images.arrowImage(ArrowNames.SouthWest).showImage(0)
            basic.pause(1000)
            images.arrowImage(ArrowNames.South).showImage(0)
            basic.pause(1000)
            images.arrowImage(ArrowNames.SouthEast).showImage(0)
            basic.pause(1000)
            images.arrowImage(ArrowNames.East).showImage(0)
            basic.pause(1000)
            images.arrowImage(ArrowNames.NorthEast).showImage(0)
            basic.pause(1000)
            images.arrowImage(ArrowNames.North).showImage(0)
            basic.pause(1000)
        }
    }
}

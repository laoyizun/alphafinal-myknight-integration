// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "幽灵迷宫":
            case "级别3":return tiles.createTilemap(hex`14001900010507070707070707050707070707070707070e021218181818181818181818181818181818130d031711111111111111111111111111111111190d031711111111111111111111111111111111190d031711111111111111111111111111111111190d0317111111090b111111111111090b111111190d03171111110a0c1111111111110a0c111111190d031711111111111111090b11111111111111190d0317111111111111110a0c1111111111111119100217111111090b111111111111090b111111190d03171111110a0c1111111111110a0c111111190d031711111111111111111111111111111111190d0317111111111111111111111111111111111910031711111111111111111111111111111111190d031516161616161611111111161616161616140d040608060606060b11111111090606060606060f0000000000000002111111110d000000000000000000000000000002111111110d000000000000000000000000000002111111110d00000000000000000001070707070c111111110a070707070e000000000212181818181111111118181818130d000000000217111111111111111111111111190d000000000217111111111111111111111111190d000000000215161616161616161616161616140d000000000408060606060606060806060606060f0000`, img`
22222222222222222222
2..................2
2..................2
2..................2
2..................2
2....22......22....2
2....22......22....2
2........22........2
2........22........2
2....22......22....2
2....22......22....2
2..................2
2..................2
2..................2
2..................2
22222222....22222222
.......2....2.......
.......2....2.......
.......2....2.......
..222222....222222..
..2..............2..
..2..............2..
..2..............2..
..2..............2..
..2222222222222222..
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundEast], TileScale.Sixteen);
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。

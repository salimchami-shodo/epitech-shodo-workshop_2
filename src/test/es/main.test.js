import { romanConverter } from "../../main/es/main";

describe("Conversion", () => {
  describe("To Roman", () => {
    describe("Simplest numbers (I & V)", () => {
      describe("Solo", () => {
        test.each([
          [1, `I`],
          [5, `V`]
        ])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
      describe("Pair", () => {
        test.each([[2, `II`]])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
      describe("Triplet", () => {
        test.each([[3, `III`]])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
      describe("Additions", () => {
        test.each([
          [6, `VI`],
          [7, `VII`],
          [8, `VIII`]
        ])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
      describe("Subtraction", () => {
        test.each([[4, `IV`]])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
    });
    describe("Getting harder (X)", () => {
      describe("Solo", () => {
        test.each([[10, `X`]])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
      describe("Pair", () => {
        test.each([[20, `XX`]])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
      describe("Triplet", () => {
        test.each([[30, `XXX`]])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
      describe("Additions", () => {
        test.each([
          [11, `XI`],
          [12, `XII`],
          [13, `XIII`],
          [15, `XV`],
          [16, `XVI`],
          [17, `XVII`],
          [18, `XVIII`]
        ])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
      describe("Subtraction", () => {
        test.each([[9, `IX`]])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
    });
    describe(`You get the spirit don't you ? (L)`, () => {
      describe("Solo", () => {
        test.each([[50, `L`]])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
      describe("Additions", () => {
        test.each([
          [51, `LI`],
          [52, `LII`],
          [53, `LIII`],
          [55, `LV`],
          [56, `LVI`],
          [57, `LVII`],
          [58, `LVIII`],
          [60, `LX`],
          [61, `LXI`],
          [62, `LXII`],
          [63, `LXIII`],
          [65, `LXV`],
          [66, `LXVI`],
          [67, `LXVII`],
          [68, `LXVIII`]
        ])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
      describe("Subtractions", () => {
        test.each([[40, `XL`]])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
      describe(`🤯 (un-obvious subtractions)`, () => {
        test.each([
          [45, `XLV`],
          [49, `XLIX`]
        ])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
    });
    describe(`Pas l'tenmps d'niaiser ... (C,D & M tout d'un coup)`, () => {
      describe("Solo", () => {
        test.each([
          [100, `C`],
          [500, `D`],
          [1000, `M`]
        ])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
      describe("Additions", () => {
        test.each([
          [101, `CI`],
          [105, `CV`],
          [106, `CVI`],
          [110, `CX`],
          [111, `CXI`],
          [115, `CXV`],
          [116, `CXVI`],
          [150, `CL`],
          [151, `CLI`],
          [155, `CLV`],
          [156, `CLVI`],
          [160, `CLX`],
          [161, `CLXI`],
          [165, `CLXV`],
          [166, `CLXVI`],
          [501, `DI`],
          [505, `DV`],
          [506, `DVI`],
          [510, `DX`],
          [511, `DXI`],
          [515, `DXV`],
          [516, `DXVI`],
          [550, `DL`],
          [551, `DLI`],
          [555, `DLV`],
          [556, `DLVI`],
          [560, `DLX`],
          [561, `DLXI`],
          [565, `DLXV`],
          [566, `DLXVI`],
          [600, `DC`],
          [601, `DCI`],
          [605, `DCV`],
          [606, `DCVI`],
          [610, `DCX`],
          [611, `DCXI`],
          [615, `DCXV`],
          [616, `DCXVI`],
          [650, `DCL`],
          [651, `DCLI`],
          [655, `DCLV`],
          [656, `DCLVI`],
          [660, `DCLX`],
          [661, `DCLXI`],
          [665, `DCLXV`],
          [666, `DCLXVI`],
          [1001, `MI`],
          [1005, `MV`],
          [1006, `MVI`],
          [1010, `MX`],
          [1011, `MXI`],
          [1015, `MXV`],
          [1016, `MXVI`],
          [1050, `ML`],
          [1051, `MLI`],
          [1055, `MLV`],
          [1056, `MLVI`],
          [1060, `MLX`],
          [1061, `MLXI`],
          [1065, `MLXV`],
          [1066, `MLXVI`],
          [1100, `MC`],
          [1101, `MCI`],
          [1105, `MCV`],
          [1106, `MCVI`],
          [1110, `MCX`],
          [1111, `MCXI`],
          [1115, `MCXV`],
          [1116, `MCXVI`],
          [1150, `MCL`],
          [1151, `MCLI`],
          [1155, `MCLV`],
          [1156, `MCLVI`],
          [1160, `MCLX`],
          [1161, `MCLXI`],
          [1165, `MCLXV`],
          [1166, `MCLXVI`],
          [1500, `MD`],
          [1501, `MDI`],
          [1505, `MDV`],
          [1506, `MDVI`],
          [1510, `MDX`],
          [1511, `MDXI`],
          [1515, `MDXV`],
          [1516, `MDXVI`],
          [1550, `MDL`],
          [1551, `MDLI`],
          [1555, `MDLV`],
          [1556, `MDLVI`],
          [1560, `MDLX`],
          [1561, `MDLXI`],
          [1565, `MDLXV`],
          [1566, `MDLXVI`],
          [1600, `MDC`],
          [1601, `MDCI`],
          [1605, `MDCV`],
          [1606, `MDCVI`],
          [1610, `MDCX`],
          [1611, `MDCXI`],
          [1615, `MDCXV`],
          [1616, `MDCXVI`],
          [1650, `MDCL`],
          [1651, `MDCLI`],
          [1655, `MDCLV`],
          [1656, `MDCLVI`],
          [1660, `MDCLX`],
          [1661, `MDCLXI`],
          [1665, `MDCLXV`],
          [1666, `MDCLXVI`]
        ])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
      describe("Subtractions", () => {
        test.each([
          [90, `XC`],
          [400, `CD`],
          [900, `CM`]
        ])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
      describe(`🤯 (un-obvious subtractions)`, () => {
        test.each([
          [95, `XCV`],
          [99, `XCIX`],
          [490, `CDXC`],
          [495, `CDXCV`],
          [494, `CDXCIV`],
          [499, `CDXCIX`],
          [999, `CMXCIX`]
        ])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
      describe(`4 teh lulz (if you got here everything works already and those are just numbers that are funny for any number of reasons)`, () => {
        test.each([
          [509, `DIX`],
          [69, `LXIX`],
          [42, `XLII`],
          [666, `DCLXVI`]
        ])("%p => %p", (arabic, roman) => {
          expect(romanConverter.toRoman(arabic)).toEqual(roman);
        });
      });
    });

    describe("To Arabic", () => {
      describe("Simplest numbers (I & V)", () => {
        describe("Solo", () => {
          test.each([
            [`I`, 1],
            [`V`, 5]
          ])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
        describe("Pair", () => {
          test.each([[`II`, 2]])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
        describe("Triplet", () => {
          test.each([[`III`, 3]])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
        describe("Additions", () => {
          test.each([
            [`VI`, 6],
            [`VII`, 7],
            [`VIII`, 8]
          ])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
        describe("Subtraction", () => {
          test.each([[`IV`, 4]])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
      });
      describe("Getting harder (X)", () => {
        describe("Solo", () => {
          test.each([[`X`, 10]])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
        describe("Pair", () => {
          test.each([[`XX`, 20]])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
        describe("Triplet", () => {
          test.each([[`XXX`, 30]])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
        describe("Additions", () => {
          test.each([
            [`XI`, 11],
            [`XII`, 12],
            [`XIII`, 13],
            [`XV`, 15],
            [`XVI`, 16],
            [`XVII`, 17],
            [`XVIII`, 18]
          ])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
        describe("Subtraction", () => {
          test.each([[`IX`, 9]])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
      });
      describe(`You get the spirit don't you ? (L)`, () => {
        describe("Solo", () => {
          test.each([[`L`, 50]])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
        describe("Additions", () => {
          test.each([
            [`LI`, 51],
            [`LII`, 52],
            [`LIII`, 53],
            [`LV`, 55],
            [`LVI`, 56],
            [`LVII`, 57],
            [`LVIII`, 58],
            [`LX`, 60],
            [`LXI`, 61],
            [`LXII`, 62],
            [`LXIII`, 63],
            [`LXV`, 65],
            [`LXVI`, 66],
            [`LXVII`, 67],
            [`LXVIII`, 68]
          ])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
        describe("Subtractions", () => {
          test.each([[`XL`, 40]])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
        describe(`🤯 (un-obvious subtractions)`, () => {
          test.each([
            [`XLV`, 45],
            [`XLIX`, 49]
          ])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
      });
      describe(`Pas l'tenmps d'niaiser ... (C,D & M tout d'un coup)`, () => {
        describe("Solo", () => {
          test.each([
            [`C`, 100],
            [`D`, 500],
            [`M`, 1000]
          ])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
        describe("Additions", () => {
          test.each([
            [`CI`, 101],
            [`CV`, 105],
            [`CVI`, 106],
            [`CX`, 110],
            [`CXI`, 111],
            [`CXV`, 115],
            [`CXVI`, 116],
            [`CL`, 150],
            [`CLI`, 151],
            [`CLV`, 155],
            [`CLVI`, 156],
            [`CLX`, 160],
            [`CLXI`, 161],
            [`CLXV`, 165],
            [`CLXVI`, 166],
            [`DI`, 501],
            [`DV`, 505],
            [`DVI`, 506],
            [`DX`, 510],
            [`DXI`, 511],
            [`DXV`, 515],
            [`DXVI`, 516],
            [`DL`, 550],
            [`DLI`, 551],
            [`DLV`, 555],
            [`DLVI`, 556],
            [`DLX`, 560],
            [`DLXI`, 561],
            [`DLXV`, 565],
            [`DLXVI`, 566],
            [`DC`, 600],
            [`DCI`, 601],
            [`DCV`, 605],
            [`DCVI`, 606],
            [`DCX`, 610],
            [`DCXI`, 611],
            [`DCXV`, 615],
            [`DCXVI`, 616],
            [`DCL`, 650],
            [`DCLI`, 651],
            [`DCLV`, 655],
            [`DCLVI`, 656],
            [`DCLX`, 660],
            [`DCLXI`, 661],
            [`DCLXV`, 665],
            [`DCLXVI`, 666],
            [`MI`, 1001],
            [`MV`, 1005],
            [`MVI`, 1006],
            [`MX`, 1010],
            [`MXI`, 1011],
            [`MXV`, 1015],
            [`MXVI`, 1016],
            [`ML`, 1050],
            [`MLI`, 1051],
            [`MLV`, 1055],
            [`MLVI`, 1056],
            [`MLX`, 1060],
            [`MLXI`, 1061],
            [`MLXV`, 1065],
            [`MLXVI`, 1066],
            [`MC`, 1100],
            [`MCI`, 1101],
            [`MCV`, 1105],
            [`MCVI`, 1106],
            [`MCX`, 1110],
            [`MCXI`, 1111],
            [`MCXV`, 1115],
            [`MCXVI`, 1116],
            [`MCL`, 1150],
            [`MCLI`, 1151],
            [`MCLV`, 1155],
            [`MCLVI`, 1156],
            [`MCLX`, 1160],
            [`MCLXI`, 1161],
            [`MCLXV`, 1165],
            [`MCLXVI`, 1166],
            [`MD`, 1500],
            [`MDI`, 1501],
            [`MDV`, 1505],
            [`MDVI`, 1506],
            [`MDX`, 1510],
            [`MDXI`, 1511],
            [`MDXV`, 1515],
            [`MDXVI`, 1516],
            [`MDL`, 1550],
            [`MDLI`, 1551],
            [`MDLV`, 1555],
            [`MDLVI`, 1556],
            [`MDLX`, 1560],
            [`MDLXI`, 1561],
            [`MDLXV`, 1565],
            [`MDLXVI`, 1566],
            [`MDC`, 1600],
            [`MDCI`, 1601],
            [`MDCV`, 1605],
            [`MDCVI`, 1606],
            [`MDCX`, 1610],
            [`MDCXI`, 1611],
            [`MDCXV`, 1615],
            [`MDCXVI`, 1616],
            [`MDCL`, 1650],
            [`MDCLI`, 1651],
            [`MDCLV`, 1655],
            [`MDCLVI`, 1656],
            [`MDCLX`, 1660],
            [`MDCLXI`, 1661],
            [`MDCLXV`, 1665],
            [`MDCLXVI`, 1666]
          ])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
        describe("Subtractions", () => {
          test.each([
            [`XC`, 90],
            [`CD`, 400],
            [`CM`, 900]
          ])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
        describe(`🤯 (un-obvious subtractions)`, () => {
          test.each([
            [`XCV`, 95],
            [`XCIX`, 99],
            [`CDXC`, 490],
            [`CDXCV`, 495],
            [`CDXCIV`, 494],
            [`CDXCIX`, 499],
            [`CMXCIX`, 999]
          ])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
        describe(`4 teh lulz (if you got here everything works already and those are just numbers that are funny for any number of reasons)`, () => {
          test.each([
            [`DIX`, 509],
            [`LXIX`, 69],
            [`XLII`, 42],
            [`DCLXVI`, 666]
          ])("%p => %p", (roman, arabic) => {
            expect(romanConverter.fromRoman(roman)).toEqual(arabic);
          });
        });
      });

      describe("Corner cases chelous", () => {
        describe("Forbidden romans", () => {
          describe("Overlapped pairs", () => {
            test.each([
              [`VV`, `ERROR : You should write it X`],
              [`LL`, `ERROR : You should write it C`],
              [`DD`, `ERROR : You should write it M`]
            ])("%p => %p", (roman, error) => {
              expect(romanConverter.fromRoman(roman)).toEqual(error);
            });
          });
        });
      });
    });
  });
});

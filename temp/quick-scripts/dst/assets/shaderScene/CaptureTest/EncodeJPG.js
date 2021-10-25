
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/CaptureTest/EncodeJPG.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76d910d2IxFvqGbKHrB690i', 'EncodeJPG');
// demo06/EncodeJPG.ts

"use strict";
/*
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.
  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are
  met:
  * Redistributions of source code must retain the above copyright notice,
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its
    contributors may be used to endorse or promote products derived from
    this software without specific prior written permission.
  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/*
JPEG encoder ported to JavaScript and optimized by Andreas Ritter, www.bytestrom.eu, 11/2009
Basic GUI blocking jpeg encoder
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeJPG = void 0;
// var btoa = btoa || function (buf) {
//     return Buffer.from(buf).toString('base64');
// };
function JPEGEncoder(quality) {
    var self = this;
    var fround = Math.round;
    var ffloor = Math.floor;
    var YTable = new Array(64);
    var UVTable = new Array(64);
    var fdtbl_Y = new Array(64);
    var fdtbl_UV = new Array(64);
    var YDC_HT;
    var UVDC_HT;
    var YAC_HT;
    var UVAC_HT;
    var bitcode = new Array(65535);
    var category = new Array(65535);
    var outputfDCTQuant = new Array(64);
    var DU = new Array(64);
    var byteout = [];
    var bytenew = 0;
    var bytepos = 7;
    var YDU = new Array(64);
    var UDU = new Array(64);
    var VDU = new Array(64);
    var clt = new Array(256);
    var RGB_YUV_TABLE = new Array(2048);
    var currentQuality;
    var ZigZag = [
        0, 1, 5, 6, 14, 15, 27, 28,
        2, 4, 7, 13, 16, 26, 29, 42,
        3, 8, 12, 17, 25, 30, 41, 43,
        9, 11, 18, 24, 31, 40, 44, 53,
        10, 19, 23, 32, 39, 45, 52, 54,
        20, 22, 33, 38, 46, 51, 55, 60,
        21, 34, 37, 47, 50, 56, 59, 61,
        35, 36, 48, 49, 57, 58, 62, 63
    ];
    var std_dc_luminance_nrcodes = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
    var std_dc_luminance_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    var std_ac_luminance_nrcodes = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 0x7d];
    var std_ac_luminance_values = [
        0x01, 0x02, 0x03, 0x00, 0x04, 0x11, 0x05, 0x12,
        0x21, 0x31, 0x41, 0x06, 0x13, 0x51, 0x61, 0x07,
        0x22, 0x71, 0x14, 0x32, 0x81, 0x91, 0xa1, 0x08,
        0x23, 0x42, 0xb1, 0xc1, 0x15, 0x52, 0xd1, 0xf0,
        0x24, 0x33, 0x62, 0x72, 0x82, 0x09, 0x0a, 0x16,
        0x17, 0x18, 0x19, 0x1a, 0x25, 0x26, 0x27, 0x28,
        0x29, 0x2a, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39,
        0x3a, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49,
        0x4a, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59,
        0x5a, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69,
        0x6a, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79,
        0x7a, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89,
        0x8a, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98,
        0x99, 0x9a, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7,
        0xa8, 0xa9, 0xaa, 0xb2, 0xb3, 0xb4, 0xb5, 0xb6,
        0xb7, 0xb8, 0xb9, 0xba, 0xc2, 0xc3, 0xc4, 0xc5,
        0xc6, 0xc7, 0xc8, 0xc9, 0xca, 0xd2, 0xd3, 0xd4,
        0xd5, 0xd6, 0xd7, 0xd8, 0xd9, 0xda, 0xe1, 0xe2,
        0xe3, 0xe4, 0xe5, 0xe6, 0xe7, 0xe8, 0xe9, 0xea,
        0xf1, 0xf2, 0xf3, 0xf4, 0xf5, 0xf6, 0xf7, 0xf8,
        0xf9, 0xfa
    ];
    var std_dc_chrominance_nrcodes = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
    var std_dc_chrominance_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    var std_ac_chrominance_nrcodes = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 0x77];
    var std_ac_chrominance_values = [
        0x00, 0x01, 0x02, 0x03, 0x11, 0x04, 0x05, 0x21,
        0x31, 0x06, 0x12, 0x41, 0x51, 0x07, 0x61, 0x71,
        0x13, 0x22, 0x32, 0x81, 0x08, 0x14, 0x42, 0x91,
        0xa1, 0xb1, 0xc1, 0x09, 0x23, 0x33, 0x52, 0xf0,
        0x15, 0x62, 0x72, 0xd1, 0x0a, 0x16, 0x24, 0x34,
        0xe1, 0x25, 0xf1, 0x17, 0x18, 0x19, 0x1a, 0x26,
        0x27, 0x28, 0x29, 0x2a, 0x35, 0x36, 0x37, 0x38,
        0x39, 0x3a, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48,
        0x49, 0x4a, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58,
        0x59, 0x5a, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68,
        0x69, 0x6a, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78,
        0x79, 0x7a, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87,
        0x88, 0x89, 0x8a, 0x92, 0x93, 0x94, 0x95, 0x96,
        0x97, 0x98, 0x99, 0x9a, 0xa2, 0xa3, 0xa4, 0xa5,
        0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xb2, 0xb3, 0xb4,
        0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xc2, 0xc3,
        0xc4, 0xc5, 0xc6, 0xc7, 0xc8, 0xc9, 0xca, 0xd2,
        0xd3, 0xd4, 0xd5, 0xd6, 0xd7, 0xd8, 0xd9, 0xda,
        0xe2, 0xe3, 0xe4, 0xe5, 0xe6, 0xe7, 0xe8, 0xe9,
        0xea, 0xf2, 0xf3, 0xf4, 0xf5, 0xf6, 0xf7, 0xf8,
        0xf9, 0xfa
    ];
    function initQuantTables(sf) {
        var YQT = [
            16, 11, 10, 16, 24, 40, 51, 61,
            12, 12, 14, 19, 26, 58, 60, 55,
            14, 13, 16, 24, 40, 57, 69, 56,
            14, 17, 22, 29, 51, 87, 80, 62,
            18, 22, 37, 56, 68, 109, 103, 77,
            24, 35, 55, 64, 81, 104, 113, 92,
            49, 64, 78, 87, 103, 121, 120, 101,
            72, 92, 95, 98, 112, 100, 103, 99
        ];
        for (var i = 0; i < 64; i++) {
            var t = ffloor((YQT[i] * sf + 50) / 100);
            if (t < 1) {
                t = 1;
            }
            else if (t > 255) {
                t = 255;
            }
            YTable[ZigZag[i]] = t;
        }
        var UVQT = [
            17, 18, 24, 47, 99, 99, 99, 99,
            18, 21, 26, 66, 99, 99, 99, 99,
            24, 26, 56, 99, 99, 99, 99, 99,
            47, 66, 99, 99, 99, 99, 99, 99,
            99, 99, 99, 99, 99, 99, 99, 99,
            99, 99, 99, 99, 99, 99, 99, 99,
            99, 99, 99, 99, 99, 99, 99, 99,
            99, 99, 99, 99, 99, 99, 99, 99
        ];
        for (var j = 0; j < 64; j++) {
            var u = ffloor((UVQT[j] * sf + 50) / 100);
            if (u < 1) {
                u = 1;
            }
            else if (u > 255) {
                u = 255;
            }
            UVTable[ZigZag[j]] = u;
        }
        var aasf = [
            1.0, 1.387039845, 1.306562965, 1.175875602,
            1.0, 0.785694958, 0.541196100, 0.275899379
        ];
        var k = 0;
        for (var row = 0; row < 8; row++) {
            for (var col = 0; col < 8; col++) {
                fdtbl_Y[k] = (1.0 / (YTable[ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
                fdtbl_UV[k] = (1.0 / (UVTable[ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
                k++;
            }
        }
    }
    function computeHuffmanTbl(nrcodes, std_table) {
        var codevalue = 0;
        var pos_in_table = 0;
        var HT = new Array();
        for (var k = 1; k <= 16; k++) {
            for (var j = 1; j <= nrcodes[k]; j++) {
                HT[std_table[pos_in_table]] = [];
                HT[std_table[pos_in_table]][0] = codevalue;
                HT[std_table[pos_in_table]][1] = k;
                pos_in_table++;
                codevalue++;
            }
            codevalue *= 2;
        }
        return HT;
    }
    function initHuffmanTbl() {
        YDC_HT = computeHuffmanTbl(std_dc_luminance_nrcodes, std_dc_luminance_values);
        UVDC_HT = computeHuffmanTbl(std_dc_chrominance_nrcodes, std_dc_chrominance_values);
        YAC_HT = computeHuffmanTbl(std_ac_luminance_nrcodes, std_ac_luminance_values);
        UVAC_HT = computeHuffmanTbl(std_ac_chrominance_nrcodes, std_ac_chrominance_values);
    }
    function initCategoryNumber() {
        var nrlower = 1;
        var nrupper = 2;
        for (var cat = 1; cat <= 15; cat++) {
            //Positive numbers
            for (var nr = nrlower; nr < nrupper; nr++) {
                category[32767 + nr] = cat;
                bitcode[32767 + nr] = [];
                bitcode[32767 + nr][1] = cat;
                bitcode[32767 + nr][0] = nr;
            }
            //Negative numbers
            for (var nrneg = -(nrupper - 1); nrneg <= -nrlower; nrneg++) {
                category[32767 + nrneg] = cat;
                bitcode[32767 + nrneg] = [];
                bitcode[32767 + nrneg][1] = cat;
                bitcode[32767 + nrneg][0] = nrupper - 1 + nrneg;
            }
            nrlower <<= 1;
            nrupper <<= 1;
        }
    }
    function initRGBYUVTable() {
        for (var i = 0; i < 256; i++) {
            RGB_YUV_TABLE[i] = 19595 * i;
            RGB_YUV_TABLE[(i + 256) >> 0] = 38470 * i;
            RGB_YUV_TABLE[(i + 512) >> 0] = 7471 * i + 0x8000;
            RGB_YUV_TABLE[(i + 768) >> 0] = -11059 * i;
            RGB_YUV_TABLE[(i + 1024) >> 0] = -21709 * i;
            RGB_YUV_TABLE[(i + 1280) >> 0] = 32768 * i + 0x807FFF;
            RGB_YUV_TABLE[(i + 1536) >> 0] = -27439 * i;
            RGB_YUV_TABLE[(i + 1792) >> 0] = -5329 * i;
        }
    }
    // IO functions
    function writeBits(bs) {
        var value = bs[0];
        var posval = bs[1] - 1;
        while (posval >= 0) {
            if (value & (1 << posval)) {
                bytenew |= (1 << bytepos);
            }
            posval--;
            bytepos--;
            if (bytepos < 0) {
                if (bytenew == 0xFF) {
                    writeByte(0xFF);
                    writeByte(0);
                }
                else {
                    writeByte(bytenew);
                }
                bytepos = 7;
                bytenew = 0;
            }
        }
    }
    function writeByte(value) {
        //byteout.push(clt[value]); // write char directly instead of converting later
        byteout.push(value);
    }
    function writeWord(value) {
        writeByte((value >> 8) & 0xFF);
        writeByte((value) & 0xFF);
    }
    // DCT & quantization core
    function fDCTQuant(data, fdtbl) {
        var d0, d1, d2, d3, d4, d5, d6, d7;
        /* Pass 1: process rows. */
        var dataOff = 0;
        var i;
        var I8 = 8;
        var I64 = 64;
        for (i = 0; i < I8; ++i) {
            d0 = data[dataOff];
            d1 = data[dataOff + 1];
            d2 = data[dataOff + 2];
            d3 = data[dataOff + 3];
            d4 = data[dataOff + 4];
            d5 = data[dataOff + 5];
            d6 = data[dataOff + 6];
            d7 = data[dataOff + 7];
            var tmp0 = d0 + d7;
            var tmp7 = d0 - d7;
            var tmp1 = d1 + d6;
            var tmp6 = d1 - d6;
            var tmp2 = d2 + d5;
            var tmp5 = d2 - d5;
            var tmp3 = d3 + d4;
            var tmp4 = d3 - d4;
            /* Even part */
            var tmp10 = tmp0 + tmp3; /* phase 2 */
            var tmp13 = tmp0 - tmp3;
            var tmp11 = tmp1 + tmp2;
            var tmp12 = tmp1 - tmp2;
            data[dataOff] = tmp10 + tmp11; /* phase 3 */
            data[dataOff + 4] = tmp10 - tmp11;
            var z1 = (tmp12 + tmp13) * 0.707106781; /* c4 */
            data[dataOff + 2] = tmp13 + z1; /* phase 5 */
            data[dataOff + 6] = tmp13 - z1;
            /* Odd part */
            tmp10 = tmp4 + tmp5; /* phase 2 */
            tmp11 = tmp5 + tmp6;
            tmp12 = tmp6 + tmp7;
            /* The rotator is modified from fig 4-8 to avoid extra negations. */
            var z5 = (tmp10 - tmp12) * 0.382683433; /* c6 */
            var z2 = 0.541196100 * tmp10 + z5; /* c2-c6 */
            var z4 = 1.306562965 * tmp12 + z5; /* c2+c6 */
            var z3 = tmp11 * 0.707106781; /* c4 */
            var z11 = tmp7 + z3; /* phase 5 */
            var z13 = tmp7 - z3;
            data[dataOff + 5] = z13 + z2; /* phase 6 */
            data[dataOff + 3] = z13 - z2;
            data[dataOff + 1] = z11 + z4;
            data[dataOff + 7] = z11 - z4;
            dataOff += 8; /* advance pointer to next row */
        }
        /* Pass 2: process columns. */
        dataOff = 0;
        for (i = 0; i < I8; ++i) {
            d0 = data[dataOff];
            d1 = data[dataOff + 8];
            d2 = data[dataOff + 16];
            d3 = data[dataOff + 24];
            d4 = data[dataOff + 32];
            d5 = data[dataOff + 40];
            d6 = data[dataOff + 48];
            d7 = data[dataOff + 56];
            var tmp0p2 = d0 + d7;
            var tmp7p2 = d0 - d7;
            var tmp1p2 = d1 + d6;
            var tmp6p2 = d1 - d6;
            var tmp2p2 = d2 + d5;
            var tmp5p2 = d2 - d5;
            var tmp3p2 = d3 + d4;
            var tmp4p2 = d3 - d4;
            /* Even part */
            var tmp10p2 = tmp0p2 + tmp3p2; /* phase 2 */
            var tmp13p2 = tmp0p2 - tmp3p2;
            var tmp11p2 = tmp1p2 + tmp2p2;
            var tmp12p2 = tmp1p2 - tmp2p2;
            data[dataOff] = tmp10p2 + tmp11p2; /* phase 3 */
            data[dataOff + 32] = tmp10p2 - tmp11p2;
            var z1p2 = (tmp12p2 + tmp13p2) * 0.707106781; /* c4 */
            data[dataOff + 16] = tmp13p2 + z1p2; /* phase 5 */
            data[dataOff + 48] = tmp13p2 - z1p2;
            /* Odd part */
            tmp10p2 = tmp4p2 + tmp5p2; /* phase 2 */
            tmp11p2 = tmp5p2 + tmp6p2;
            tmp12p2 = tmp6p2 + tmp7p2;
            /* The rotator is modified from fig 4-8 to avoid extra negations. */
            var z5p2 = (tmp10p2 - tmp12p2) * 0.382683433; /* c6 */
            var z2p2 = 0.541196100 * tmp10p2 + z5p2; /* c2-c6 */
            var z4p2 = 1.306562965 * tmp12p2 + z5p2; /* c2+c6 */
            var z3p2 = tmp11p2 * 0.707106781; /* c4 */
            var z11p2 = tmp7p2 + z3p2; /* phase 5 */
            var z13p2 = tmp7p2 - z3p2;
            data[dataOff + 40] = z13p2 + z2p2; /* phase 6 */
            data[dataOff + 24] = z13p2 - z2p2;
            data[dataOff + 8] = z11p2 + z4p2;
            data[dataOff + 56] = z11p2 - z4p2;
            dataOff++; /* advance pointer to next column */
        }
        // Quantize/descale the coefficients
        var fDCTQuant;
        for (i = 0; i < I64; ++i) {
            // Apply the quantization and scaling factor & Round to nearest integer
            fDCTQuant = data[i] * fdtbl[i];
            outputfDCTQuant[i] = (fDCTQuant > 0.0) ? ((fDCTQuant + 0.5) | 0) : ((fDCTQuant - 0.5) | 0);
            //outputfDCTQuant[i] = fround(fDCTQuant);
        }
        return outputfDCTQuant;
    }
    function writeAPP0() {
        writeWord(0xFFE0); // marker
        writeWord(16); // length
        writeByte(0x4A); // J
        writeByte(0x46); // F
        writeByte(0x49); // I
        writeByte(0x46); // F
        writeByte(0); // = "JFIF",'\0'
        writeByte(1); // versionhi
        writeByte(1); // versionlo
        writeByte(0); // xyunits
        writeWord(1); // xdensity
        writeWord(1); // ydensity
        writeByte(0); // thumbnwidth
        writeByte(0); // thumbnheight
    }
    function writeAPP1(exifBuffer) {
        if (!exifBuffer)
            return;
        writeWord(0xFFE1); // APP1 marker
        if (exifBuffer[0] === 0x45 &&
            exifBuffer[1] === 0x78 &&
            exifBuffer[2] === 0x69 &&
            exifBuffer[3] === 0x66) {
            // Buffer already starts with EXIF, just use it directly
            writeWord(exifBuffer.length + 2); // length is buffer + length itself!
        }
        else {
            // Buffer doesn't start with EXIF, write it for them
            writeWord(exifBuffer.length + 5 + 2); // length is buffer + EXIF\0 + length itself!
            writeByte(0x45); // E
            writeByte(0x78); // X
            writeByte(0x69); // I
            writeByte(0x66); // F
            writeByte(0); // = "EXIF",'\0'
        }
        for (var i = 0; i < exifBuffer.length; i++) {
            writeByte(exifBuffer[i]);
        }
    }
    function writeSOF0(width, height) {
        writeWord(0xFFC0); // marker
        writeWord(17); // length, truecolor YUV JPG
        writeByte(8); // precision
        writeWord(height);
        writeWord(width);
        writeByte(3); // nrofcomponents
        writeByte(1); // IdY
        writeByte(0x11); // HVY
        writeByte(0); // QTY
        writeByte(2); // IdU
        writeByte(0x11); // HVU
        writeByte(1); // QTU
        writeByte(3); // IdV
        writeByte(0x11); // HVV
        writeByte(1); // QTV
    }
    function writeDQT() {
        writeWord(0xFFDB); // marker
        writeWord(132); // length
        writeByte(0);
        for (var i = 0; i < 64; i++) {
            writeByte(YTable[i]);
        }
        writeByte(1);
        for (var j = 0; j < 64; j++) {
            writeByte(UVTable[j]);
        }
    }
    function writeDHT() {
        writeWord(0xFFC4); // marker
        writeWord(0x01A2); // length
        writeByte(0); // HTYDCinfo
        for (var i = 0; i < 16; i++) {
            writeByte(std_dc_luminance_nrcodes[i + 1]);
        }
        for (var j = 0; j <= 11; j++) {
            writeByte(std_dc_luminance_values[j]);
        }
        writeByte(0x10); // HTYACinfo
        for (var k = 0; k < 16; k++) {
            writeByte(std_ac_luminance_nrcodes[k + 1]);
        }
        for (var l = 0; l <= 161; l++) {
            writeByte(std_ac_luminance_values[l]);
        }
        writeByte(1); // HTUDCinfo
        for (var m = 0; m < 16; m++) {
            writeByte(std_dc_chrominance_nrcodes[m + 1]);
        }
        for (var n = 0; n <= 11; n++) {
            writeByte(std_dc_chrominance_values[n]);
        }
        writeByte(0x11); // HTUACinfo
        for (var o = 0; o < 16; o++) {
            writeByte(std_ac_chrominance_nrcodes[o + 1]);
        }
        for (var p = 0; p <= 161; p++) {
            writeByte(std_ac_chrominance_values[p]);
        }
    }
    function writeCOM(comments) {
        if (typeof comments === "undefined" || comments.constructor !== Array)
            return;
        comments.forEach(function (e) {
            if (typeof e !== "string")
                return;
            writeWord(0xFFFE); // marker
            var l = e.length;
            writeWord(l + 2); // length itself as well
            var i;
            for (i = 0; i < l; i++)
                writeByte(e.charCodeAt(i));
        });
    }
    function writeSOS() {
        writeWord(0xFFDA); // marker
        writeWord(12); // length
        writeByte(3); // nrofcomponents
        writeByte(1); // IdY
        writeByte(0); // HTY
        writeByte(2); // IdU
        writeByte(0x11); // HTU
        writeByte(3); // IdV
        writeByte(0x11); // HTV
        writeByte(0); // Ss
        writeByte(0x3f); // Se
        writeByte(0); // Bf
    }
    function processDU(CDU, fdtbl, DC, HTDC, HTAC) {
        var EOB = HTAC[0x00];
        var M16zeroes = HTAC[0xF0];
        var pos;
        var I16 = 16;
        var I63 = 63;
        var I64 = 64;
        var DU_DCT = fDCTQuant(CDU, fdtbl);
        //ZigZag reorder
        for (var j = 0; j < I64; ++j) {
            DU[ZigZag[j]] = DU_DCT[j];
        }
        var Diff = DU[0] - DC;
        DC = DU[0];
        //Encode DC
        if (Diff == 0) {
            writeBits(HTDC[0]); // Diff might be 0
        }
        else {
            pos = 32767 + Diff;
            writeBits(HTDC[category[pos]]);
            writeBits(bitcode[pos]);
        }
        //Encode ACs
        var end0pos = 63; // was const... which is crazy
        for (; (end0pos > 0) && (DU[end0pos] == 0); end0pos--) { }
        ;
        //end0pos = first element in reverse order !=0
        if (end0pos == 0) {
            writeBits(EOB);
            return DC;
        }
        var i = 1;
        var lng;
        while (i <= end0pos) {
            var startpos = i;
            for (; (DU[i] == 0) && (i <= end0pos); ++i) { }
            var nrzeroes = i - startpos;
            if (nrzeroes >= I16) {
                lng = nrzeroes >> 4;
                for (var nrmarker = 1; nrmarker <= lng; ++nrmarker)
                    writeBits(M16zeroes);
                nrzeroes = nrzeroes & 0xF;
            }
            pos = 32767 + DU[i];
            writeBits(HTAC[(nrzeroes << 4) + category[pos]]);
            writeBits(bitcode[pos]);
            i++;
        }
        if (end0pos != I63) {
            writeBits(EOB);
        }
        return DC;
    }
    function initCharLookupTable() {
        var sfcc = String.fromCharCode;
        for (var i = 0; i < 256; i++) { ///// ACHTUNG // 255
            clt[i] = sfcc(i);
        }
    }
    this.encode = function (image, quality) {
        var time_start = new Date().getTime();
        if (quality)
            setQuality(quality);
        // Initialize bit writer
        byteout = new Array();
        bytenew = 0;
        bytepos = 7;
        // Add JPEG headers
        writeWord(0xFFD8); // SOI
        writeAPP0();
        writeCOM(image.comments);
        writeAPP1(image.exifBuffer);
        writeDQT();
        writeSOF0(image.width, image.height);
        writeDHT();
        writeSOS();
        // Encode 8x8 macroblocks
        var DCY = 0;
        var DCU = 0;
        var DCV = 0;
        bytenew = 0;
        bytepos = 7;
        this.encode.displayName = "_encode_";
        var imageData = image.data;
        var width = image.width;
        var height = image.height;
        var quadWidth = width * 4;
        var tripleWidth = width * 3;
        var x, y = 0;
        var r, g, b;
        var start, p, col, row, pos;
        while (y < height) {
            x = 0;
            while (x < quadWidth) {
                start = quadWidth * y + x;
                p = start;
                col = -1;
                row = 0;
                for (pos = 0; pos < 64; pos++) {
                    row = pos >> 3; // /8
                    col = (pos & 7) * 4; // %8
                    p = start + (row * quadWidth) + col;
                    if (y + row >= height) { // padding bottom
                        p -= (quadWidth * (y + 1 + row - height));
                    }
                    if (x + col >= quadWidth) { // padding right	
                        p -= ((x + col) - quadWidth + 4);
                    }
                    r = imageData[p++];
                    g = imageData[p++];
                    b = imageData[p++];
                    /* // calculate YUV values dynamically
                    YDU[pos]=((( 0.29900)*r+( 0.58700)*g+( 0.11400)*b))-128; //-0x80
                    UDU[pos]=(((-0.16874)*r+(-0.33126)*g+( 0.50000)*b));
                    VDU[pos]=((( 0.50000)*r+(-0.41869)*g+(-0.08131)*b));
                    */
                    // use lookup table (slightly faster)
                    YDU[pos] = ((RGB_YUV_TABLE[r] + RGB_YUV_TABLE[(g + 256) >> 0] + RGB_YUV_TABLE[(b + 512) >> 0]) >> 16) - 128;
                    UDU[pos] = ((RGB_YUV_TABLE[(r + 768) >> 0] + RGB_YUV_TABLE[(g + 1024) >> 0] + RGB_YUV_TABLE[(b + 1280) >> 0]) >> 16) - 128;
                    VDU[pos] = ((RGB_YUV_TABLE[(r + 1280) >> 0] + RGB_YUV_TABLE[(g + 1536) >> 0] + RGB_YUV_TABLE[(b + 1792) >> 0]) >> 16) - 128;
                }
                DCY = processDU(YDU, fdtbl_Y, DCY, YDC_HT, YAC_HT);
                DCU = processDU(UDU, fdtbl_UV, DCU, UVDC_HT, UVAC_HT);
                DCV = processDU(VDU, fdtbl_UV, DCV, UVDC_HT, UVAC_HT);
                x += 32;
            }
            y += 8;
        }
        ////////////////////////////////////////////////////////////////
        // Do the bit alignment of the EOI marker
        if (bytepos >= 0) {
            var fillbits = [];
            fillbits[1] = bytepos + 1;
            fillbits[0] = (1 << (bytepos + 1)) - 1;
            writeBits(fillbits);
        }
        writeWord(0xFFD9); //EOI
        return new Uint8Array(byteout);
        var jpegDataUri = 'data:image/jpeg;base64,' + btoa(byteout.join(''));
        byteout = [];
        // benchmarking
        var duration = new Date().getTime() - time_start;
        //console.log('Encoding time: '+ duration + 'ms');
        //
        return jpegDataUri;
    };
    function setQuality(quality) {
        if (quality <= 0) {
            quality = 1;
        }
        if (quality > 100) {
            quality = 100;
        }
        if (currentQuality == quality)
            return; // don't recalc if unchanged
        var sf = 0;
        if (quality < 50) {
            sf = Math.floor(5000 / quality);
        }
        else {
            sf = Math.floor(200 - quality * 2);
        }
        initQuantTables(sf);
        currentQuality = quality;
        //console.log('Quality set to: '+quality +'%');
    }
    function init() {
        var time_start = new Date().getTime();
        if (!quality)
            quality = 50;
        // Create tables
        initCharLookupTable();
        initHuffmanTbl();
        initCategoryNumber();
        initRGBYUVTable();
        setQuality(quality);
        var duration = new Date().getTime() - time_start;
        //console.log('Initialization '+ duration + 'ms');
    }
    init();
}
;
function encodeJPG(imgData, qu) {
    if (typeof qu === 'undefined')
        qu = 50;
    var encoder = new JPEGEncoder(qu);
    var data = encoder.encode(imgData, qu);
    return {
        data: data,
        width: imgData.width,
        height: imgData.height,
    };
}
exports.encodeJPG = encodeJPG;
// helper function to get the imageData of an existing image on the current page.
function getImageDataFromImage(idOrElement) {
    var theImg = (typeof (idOrElement) == 'string') ? document.getElementById(idOrElement) : idOrElement;
    var cvs = document.createElement('canvas');
    cvs.width = theImg.width;
    cvs.height = theImg.height;
    var ctx = cvs.getContext("2d");
    ctx.drawImage(theImg, 0, 0);
    return (ctx.getImageData(0, 0, cvs.width, cvs.height));
}
//https://github.com/jpeg-js/jpeg-js/blob/master/lib/encoder.js

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9kZW1vMDYvRW5jb2RlSlBHLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMkJFO0FBQ0Y7OztFQUdFOzs7QUFFRixzQ0FBc0M7QUFDdEMsa0RBQWtEO0FBQ2xELEtBQUs7QUFFTCxTQUFTLFdBQVcsQ0FBQyxPQUFPO0lBQ3hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztJQUNoQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3hCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDeEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0IsSUFBSSxNQUFNLENBQUM7SUFDWCxJQUFJLE9BQU8sQ0FBQztJQUNaLElBQUksTUFBTSxDQUFDO0lBQ1gsSUFBSSxPQUFPLENBQUM7SUFFWixJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixJQUFJLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxJQUFJLGVBQWUsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDakIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztJQUVoQixJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixJQUFJLGFBQWEsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxJQUFJLGNBQWMsQ0FBQztJQUVuQixJQUFJLE1BQU0sR0FBRztRQUNULENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQzFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQzNCLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQzVCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQzdCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQzlCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQzlCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQzlCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0tBQ2pDLENBQUM7SUFFRixJQUFJLHdCQUF3QixHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25GLElBQUksdUJBQXVCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLElBQUksd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEYsSUFBSSx1QkFBdUIsR0FBRztRQUMxQixJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFFRixJQUFJLDBCQUEwQixHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLElBQUkseUJBQXlCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLElBQUksMEJBQTBCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEYsSUFBSSx5QkFBeUIsR0FBRztRQUM1QixJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QyxJQUFJLEVB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QjtRQUNsQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBSSxNQUFNO1FBQ3ZCLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFDdkIsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUksTUFBTTtRQUN2QixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBSSxNQUFNO1FBQ3ZCLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFDdkIsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUksTUFBTTtRQUN2QixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBSSxNQUFNO1FBQ3ZCLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFDdkIsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUksTUFBTTtJQUMzQixDQUFDO0lBRUQsU0FBUyxRQUFRO1FBQ2IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUztRQUM1QixTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBSSxTQUFTO1FBQzVCLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBRUQsU0FBUyxRQUFRO1FBQ2IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUztRQUM1QixTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBRTVCLFNBQVMs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QUUsT0FBTyxDQUFDLE1BQU07S0FDekIsQ0FBQztBQUNOLENBQUM7QUFURCw4QkFTQztBQUVELGlGQUFpRjtBQUNqRixTQUFTLHFCQUFxQixDQUFDLFdBQVc7SUFDdEMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUNyRyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN6QixHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDM0IsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFJQywrREFBK0QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gIENvcHlyaWdodCAoYykgMjAwOCwgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWRcclxuICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBcclxuICBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXHJcbiAgbWV0OlxyXG4gICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCBcclxuICAgIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbiAgXHJcbiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodFxyXG4gICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBcclxuICAgIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbiAgXHJcbiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkIG5vciB0aGUgbmFtZXMgb2YgaXRzIFxyXG4gICAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gXHJcbiAgICB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG4gIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBU1xyXG4gIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sXHJcbiAgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUlxyXG4gIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1IgXHJcbiAgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsXHJcbiAgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLFxyXG4gIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxyXG4gIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0ZcclxuICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xyXG4gIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJU1xyXG4gIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxyXG4qL1xyXG4vKlxyXG5KUEVHIGVuY29kZXIgcG9ydGVkIHRvIEphdmFTY3JpcHQgYW5kIG9wdGltaXplZCBieSBBbmRyZWFzIFJpdHRlciwgd3d3LmJ5dGVzdHJvbS5ldSwgMTEvMjAwOVxyXG5CYXNpYyBHVUkgYmxvY2tpbmcganBlZyBlbmNvZGVyXHJcbiovXHJcblxyXG4vLyB2YXIgYnRvYSA9IGJ0b2EgfHwgZnVuY3Rpb24gKGJ1Zikge1xyXG4vLyAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGJ1ZikudG9TdHJpbmcoJ2Jhc2U2NCcpO1xyXG4vLyB9O1xyXG5cclxuZnVuY3Rpb24gSlBFR0VuY29kZXIocXVhbGl0eSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdmFyIGZyb3VuZCA9IE1hdGgucm91bmQ7XHJcbiAgICB2YXIgZmZsb29yID0gTWF0aC5mbG9vcjtcclxuICAgIHZhciBZVGFibGUgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgdmFyIFVWVGFibGUgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgdmFyIGZkdGJsX1kgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgdmFyIGZkdGJsX1VWID0gbmV3IEFycmF5KDY0KTtcclxuICAgIHZhciBZRENfSFQ7XHJcbiAgICB2YXIgVVZEQ19IVDtcclxuICAgIHZhciBZQUNfSFQ7XHJcbiAgICB2YXIgVVZBQ19IVDtcclxuXHJcbiAgICB2YXIgYml0Y29kZSA9IG5ldyBBcnJheSg2NTUzNSk7XHJcbiAgICB2YXIgY2F0ZWdvcnkgPSBuZXcgQXJyYXkoNjU1MzUpO1xyXG4gICAgdmFyIG91dHB1dGZEQ1RRdWFudCA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICB2YXIgRFUgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgdmFyIGJ5dGVvdXQgPSBbXTtcclxuICAgIHZhciBieXRlbmV3ID0gMDtcclxuICAgIHZhciBieXRlcG9zID0gNztcclxuXHJcbiAgICB2YXIgWURVID0gbmV3IEFycmF5KDY0KTtcclxuICAgIHZhciBVRFUgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgdmFyIFZEVSA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICB2YXIgY2x0ID0gbmV3IEFycmF5KDI1Nik7XHJcbiAgICB2YXIgUkdCX1lVVl9UQUJMRSA9IG5ldyBBcnJheSgyMDQ4KTtcclxuICAgIHZhciBjdXJyZW50UXVhbGl0eTtcclxuXHJcbiAgICB2YXIgWmlnWmFnID0gW1xyXG4gICAgICAgIDAsIDEsIDUsIDYsIDE0LCAxNSwgMjcsIDI4LFxyXG4gICAgICAgIDIsIDQsIDcsIDEzLCAxNiwgMjYsIDI5LCA0MixcclxuICAgICAgICAzLCA4LCAxMiwgMTcsIDI1LCAzMCwgNDEsIDQzLFxyXG4gICAgICAgIDksIDExLCAxOCwgMjQsIDMxLCA0MCwgNDQsIDUzLFxyXG4gICAgICAgIDEwLCAxOSwgMjMsIDMyLCAzOSwgNDUsIDUyLCA1NCxcclxuICAgICAgICAyMCwgMjIsIDMzLCAzOCwgNDYsIDUxLCA1NSwgNjAsXHJcbiAgICAgICAgMjEsIDM0LCAzNywgNDcsIDUwLCA1NiwgNTksIDYxLFxyXG4gICAgICAgIDM1LCAzNiwgNDgsIDQ5LCA1NywgNTgsIDYyLCA2M1xyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgc3RkX2RjX2x1bWluYW5jZV9ucmNvZGVzID0gWzAsIDAsIDEsIDUsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xyXG4gICAgdmFyIHN0ZF9kY19sdW1pbmFuY2VfdmFsdWVzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMV07XHJcbiAgICB2YXIgc3RkX2FjX2x1bWluYW5jZV9ucmNvZGVzID0gWzAsIDAsIDIsIDEsIDMsIDMsIDIsIDQsIDMsIDUsIDUsIDQsIDQsIDAsIDAsIDEsIDB4N2RdO1xyXG4gICAgdmFyIHN0ZF9hY19sdW1pbmFuY2VfdmFsdWVzID0gW1xyXG4gICAgICAgIDB4MDEsIDB4MDIsIDB4MDMsIDB4MDAsIDB4MDQsIDB4MTEsIDB4MDUsIDB4MTIsXHJcbiAgICAgICAgMHgyMSwgMHgzMSwgMHg0MSwgMHgwNiwgMHgxMywgMHg1MSwgMHg2MSwgMHgwNyxcclxuICAgICAgICAweDIyLCAweDcxLCAweDE0LCAweDMyLCAweDgxLCAweDkxLCAweGExLCAweDA4LFxyXG4gICAgICAgIDB4MjMsIDB4NDIsIDB4YjEsIDB4YzEsIDB4MTUsIDB4NTIsIDB4ZDEsIDB4ZjAsXHJcbiAgICAgICAgMHgyNCwgMHgzMywgMHg2MiwgMHg3MiwgMHg4MiwgMHgwOSwgMHgwYSwgMHgxNixcclxuICAgICAgICAweDE3LCAweDE4LCAweDE5LCAweDFhLCAweDI1LCAweDI2LCAweDI3LCAweDI4LFxyXG4gICAgICAgIDB4MjksIDB4MmEsIDB4MzQsIDB4MzUsIDB4MzYsIDB4MzcsIDB4MzgsIDB4MzksXHJcbiAgICAgICAgMHgzYSwgMHg0MywgMHg0NCwgMHg0NSwgMHg0NiwgMHg0NywgMHg0OCwgMHg0OSxcclxuICAgICAgICAweDRhLCAweDUzLCAweDU0LCAweDU1LCAweDU2LCAweDU3LCAweDU4LCAweDU5LFxyXG4gICAgICAgIDB4NWEsIDB4NjMsIDB4NjQsIDB4NjUsIDB4NjYsIDB4NjcsIDB4NjgsIDB4NjksXHJcbiAgICAgICAgMHg2YSwgMHg3MywgMHg3NCwgMHg3NSwgMHg3NiwgMHg3NywgMHg3OCwgMHg3OSxcclxuICAgICAgICAweDdhLCAweDgzLCAweDg0LCAweDg1LCAweDg2LCAweDg3LCAweDg4LCAweDg5LFxyXG4gICAgICAgIDB4OGEsIDB4OTIsIDB4OTMsIDB4OTQsIDB4OTUsIDB4OTYsIDB4OTcsIDB4OTgsXHJcbiAgICAgICAgMHg5OSwgMHg5YSwgMHhhMiwgMHhhMywgMHhhNCwgMHhhNSwgMHhhNiwgMHhhNyxcclxuICAgICAgICAweGE4LCAweGE5LCAweGFhLCAweGIyLCAweGIzLCAweGI0LCAweGI1LCAweGI2LFxyXG4gICAgICAgIDB4YjcsIDB4YjgsIDB4YjksIDB4YmEsIDB4YzIsIDB4YzMsIDB4YzQsIDB4YzUsXHJcbiAgICAgICAgMHhjNiwgMHhjNywgMHhjOCwgMHhjOSwgMHhjYSwgMHhkMiwgMHhkMywgMHhkNCxcclxuICAgICAgICAweGQ1LCAweGQ2LCAweGQ3LCAweGQ4LCAweGQ5LCAweGRhLCAweGUxLCAweGUyLFxyXG4gICAgICAgIDB4ZTMsIDB4ZTQsIDB4ZTUsIDB4ZTYsIDB4ZTcsIDB4ZTgsIDB4ZTksIDB4ZWEsXHJcbiAgICAgICAgMHhmMSwgMHhmMiwgMHhmMywgMHhmNCwgMHhmNSwgMHhmNiwgMHhmNywgMHhmOCxcclxuICAgICAgICAweGY5LCAweGZhXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBzdGRfZGNfY2hyb21pbmFuY2VfbnJjb2RlcyA9IFswLCAwLCAzLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwXTtcclxuICAgIHZhciBzdGRfZGNfY2hyb21pbmFuY2VfdmFsdWVzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMV07XHJcbiAgICB2YXIgc3RkX2FjX2Nocm9taW5hbmNlX25yY29kZXMgPSBbMCwgMCwgMiwgMSwgMiwgNCwgNCwgMywgNCwgNywgNSwgNCwgNCwgMCwgMSwgMiwgMHg3N107XHJcbiAgICB2YXIgc3RkX2FjX2Nocm9taW5hbmNlX3ZhbHVlcyA9IFtcclxuICAgICAgICAweDAwLCAweDAxLCAweDAyLCAweDAzLCAweDExLCAweDA0LCAweDA1LCAweDIxLFxyXG4gICAgICAgIDB4MzEsIDB4MDYsIDB4MTIsIDB4NDEsIDB4NTEsIDB4MDcsIDB4NjEsIDB4NzEsXHJcbiAgICAgICAgMHgxMywgMHgyMiwgMHgzMiwgMHg4MSwgMHgwOCwgMHgxNCwgMHg0MiwgMHg5MSxcclxuICAgICAgICAweGExLCAweGIxLCAweGMxLCAweDA5LCAweDIzLCAweDMzLCAweDUyLCAweGYwLFxyXG4gICAgICAgIDB4MTUsIDB4NjIsIDB4NzIsIDB4ZDEsIDB4MGEsIDB4MTYsIDB4MjQsIDB4MzQsXHJcbiAgICAgICAgMHhlMSwgMHgyNSwgMHhmMSwgMHgxNywgMHgxOCwgMHgxOSwgMHgxYSwgMHgyNixcclxuICAgICAgICAweDI3LCAweDI4LCAweDI5LCAweDJhLCAweDM1LCAweDM2LCAweDM3LCAweDM4LFxyXG4gICAgICAgIDB4MzksIDB4M2EsIDB4NDMsIDB4NDQsIDB4NDUsIDB4NDYsIDB4NDcsIDB4NDgsXHJcbiAgICAgICAgMHg0OSwgMHg0YSwgMHg1MywgMHg1NCwgMHg1NSwgMHg1NiwgMHg1NywgMHg1OCxcclxuICAgICAgICAweDU5LCAweDVhLCAweDYzLCAweDY0LCAweDY1LCAweDY2LCAweDY3LCAweDY4LFxyXG4gICAgICAgIDB4NjksIDB4NmEsIDB4NzMsIDB4NzQsIDB4NzUsIDB4NzYsIDB4NzcsIDB4NzgsXHJcbiAgICAgICAgMHg3OSwgMHg3YSwgMHg4MiwgMHg4MywgMHg4NCwgMHg4NSwgMHg4NiwgMHg4NyxcclxuICAgICAgICAweDg4LCAweDg5LCAweDhhLCAweDkyLCAweDkzLCAweDk0LCAweDk1LCAweDk2LFxyXG4gICAgICAgIDB4OTcsIDB4OTgsIDB4OTksIDB4OWEsIDB4YTIsIDB4YTMsIDB4YTQsIDB4YTUsXHJcbiAgICAgICAgMHhhNiwgMHhhNywgMHhhOCwgMHhhOSwgMHhhYSwgMHhiMiwgMHhiMywgMHhiNCxcclxuICAgICAgICAweGI1LCAweGI2LCAweGI3LCAweGI4LCAweGI5LCAweGJhLCAweGMyLCAweGMzLFxyXG4gICAgICAgIDB4YzQsIDB4YzUsIDB4YzYsIDB4YzcsIDB4YzgsIDB4YzksIDB4Y2EsIDB4ZDIsXHJcbiAgICAgICAgMHhkMywgMHhkNCwgMHhkNSwgMHhkNiwgMHhkNywgMHhkOCwgMHhkOSwgMHhkYSxcclxuICAgICAgICAweGUyLCAweGUzLCAweGU0LCAweGU1LCAweGU2LCAweGU3LCAweGU4LCAweGU5LFxyXG4gICAgICAgIDB4ZWEsIDB4ZjIsIDB4ZjMsIDB4ZjQsIDB4ZjUsIDB4ZjYsIDB4ZjcsIDB4ZjgsXHJcbiAgICAgICAgMHhmOSwgMHhmYVxyXG4gICAgXTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0UXVhbnRUYWJsZXMoc2YpIHtcclxuICAgICAgICB2YXIgWVFUID0gW1xyXG4gICAgICAgICAgICAxNiwgMTEsIDEwLCAxNiwgMjQsIDQwLCA1MSwgNjEsXHJcbiAgICAgICAgICAgIDEyLCAxMiwgMTQsIDE5LCAyNiwgNTgsIDYwLCA1NSxcclxuICAgICAgICAgICAgMTQsIDEzLCAxNiwgMjQsIDQwLCA1NywgNjksIDU2LFxyXG4gICAgICAgICAgICAxNCwgMTcsIDIyLCAyOSwgNTEsIDg3LCA4MCwgNjIsXHJcbiAgICAgICAgICAgIDE4LCAyMiwgMzcsIDU2LCA2OCwgMTA5LCAxMDMsIDc3LFxyXG4gICAgICAgICAgICAyNCwgMzUsIDU1LCA2NCwgODEsIDEwNCwgMTEzLCA5MixcclxuICAgICAgICAgICAgNDksIDY0LCA3OCwgODcsIDEwMywgMTIxLCAxMjAsIDEwMSxcclxuICAgICAgICAgICAgNzIsIDkyLCA5NSwgOTgsIDExMiwgMTAwLCAxMDMsIDk5XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2NDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gZmZsb29yKChZUVRbaV0gKiBzZiArIDUwKSAvIDEwMCk7XHJcbiAgICAgICAgICAgIGlmICh0IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgdCA9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodCA+IDI1NSkge1xyXG4gICAgICAgICAgICAgICAgdCA9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBZVGFibGVbWmlnWmFnW2ldXSA9IHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBVVlFUID0gW1xyXG4gICAgICAgICAgICAxNywgMTgsIDI0LCA0NywgOTksIDk5LCA5OSwgOTksXHJcbiAgICAgICAgICAgIDE4LCAyMSwgMjYsIDY2LCA5OSwgOTksIDk5LCA5OSxcclxuICAgICAgICAgICAgMjQsIDI2LCA1NiwgOTksIDk5LCA5OSwgOTksIDk5LFxyXG4gICAgICAgICAgICA0NywgNjYsIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksXHJcbiAgICAgICAgICAgIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksIDk5LCA5OSxcclxuICAgICAgICAgICAgOTksIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksIDk5LFxyXG4gICAgICAgICAgICA5OSwgOTksIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksXHJcbiAgICAgICAgICAgIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksIDk5LCA5OVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA2NDsgaisrKSB7XHJcbiAgICAgICAgICAgIHZhciB1ID0gZmZsb29yKChVVlFUW2pdICogc2YgKyA1MCkgLyAxMDApO1xyXG4gICAgICAgICAgICBpZiAodSA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHUgPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHUgPiAyNTUpIHtcclxuICAgICAgICAgICAgICAgIHUgPSAyNTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVVZUYWJsZVtaaWdaYWdbal1dID0gdTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFhc2YgPSBbXHJcbiAgICAgICAgICAgIDEuMCwgMS4zODcwMzk4NDUsIDEuMzA2NTYyOTY1LCAxLjE3NTg3NTYwMixcclxuICAgICAgICAgICAgMS4wLCAwLjc4NTY5NDk1OCwgMC41NDExOTYxMDAsIDAuMjc1ODk5Mzc5XHJcbiAgICAgICAgXTtcclxuICAgICAgICB2YXIgayA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgODsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgODsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgIGZkdGJsX1lba10gPSAoMS4wIC8gKFlUYWJsZVtaaWdaYWdba11dICogYWFzZltyb3ddICogYWFzZltjb2xdICogOC4wKSk7XHJcbiAgICAgICAgICAgICAgICBmZHRibF9VVltrXSA9ICgxLjAgLyAoVVZUYWJsZVtaaWdaYWdba11dICogYWFzZltyb3ddICogYWFzZltjb2xdICogOC4wKSk7XHJcbiAgICAgICAgICAgICAgICBrKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcHV0ZUh1ZmZtYW5UYmwobnJjb2Rlcywgc3RkX3RhYmxlKSB7XHJcbiAgICAgICAgdmFyIGNvZGV2YWx1ZSA9IDA7XHJcbiAgICAgICAgdmFyIHBvc19pbl90YWJsZSA9IDA7XHJcbiAgICAgICAgdmFyIEhUID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yICh2YXIgayA9IDE7IGsgPD0gMTY7IGsrKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8PSBucmNvZGVzW2tdOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIEhUW3N0ZF90YWJsZVtwb3NfaW5fdGFibGVdXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgSFRbc3RkX3RhYmxlW3Bvc19pbl90YWJsZV1dWzBdID0gY29kZXZhbHVlO1xyXG4gICAgICAgICAgICAgICAgSFRbc3RkX3RhYmxlW3Bvc19pbl90YWJsZV1dWzFdID0gaztcclxuICAgICAgICAgICAgICAgIHBvc19pbl90YWJsZSsrO1xyXG4gICAgICAgICAgICAgICAgY29kZXZhbHVlKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29kZXZhbHVlICo9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBIVDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0SHVmZm1hblRibCgpIHtcclxuICAgICAgICBZRENfSFQgPSBjb21wdXRlSHVmZm1hblRibChzdGRfZGNfbHVtaW5hbmNlX25yY29kZXMsIHN0ZF9kY19sdW1pbmFuY2VfdmFsdWVzKTtcclxuICAgICAgICBVVkRDX0hUID0gY29tcHV0ZUh1ZmZtYW5UYmwoc3RkX2RjX2Nocm9taW5hbmNlX25yY29kZXMsIHN0ZF9kY19jaHJvbWluYW5jZV92YWx1ZXMpO1xyXG4gICAgICAgIFlBQ19IVCA9IGNvbXB1dGVIdWZmbWFuVGJsKHN0ZF9hY19sdW1pbmFuY2VfbnJjb2Rlcywgc3RkX2FjX2x1bWluYW5jZV92YWx1ZXMpO1xyXG4gICAgICAgIFVWQUNfSFQgPSBjb21wdXRlSHVmZm1hblRibChzdGRfYWNfY2hyb21pbmFuY2VfbnJjb2Rlcywgc3RkX2FjX2Nocm9taW5hbmNlX3ZhbHVlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdENhdGVnb3J5TnVtYmVyKCkge1xyXG4gICAgICAgIHZhciBucmxvd2VyID0gMTtcclxuICAgICAgICB2YXIgbnJ1cHBlciA9IDI7XHJcbiAgICAgICAgZm9yICh2YXIgY2F0ID0gMTsgY2F0IDw9IDE1OyBjYXQrKykge1xyXG4gICAgICAgICAgICAvL1Bvc2l0aXZlIG51bWJlcnNcclxuICAgICAgICAgICAgZm9yICh2YXIgbnIgPSBucmxvd2VyOyBuciA8IG5ydXBwZXI7IG5yKyspIHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5WzMyNzY3ICsgbnJdID0gY2F0O1xyXG4gICAgICAgICAgICAgICAgYml0Y29kZVszMjc2NyArIG5yXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYml0Y29kZVszMjc2NyArIG5yXVsxXSA9IGNhdDtcclxuICAgICAgICAgICAgICAgIGJpdGNvZGVbMzI3NjcgKyBucl1bMF0gPSBucjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL05lZ2F0aXZlIG51bWJlcnNcclxuICAgICAgICAgICAgZm9yICh2YXIgbnJuZWcgPSAtKG5ydXBwZXIgLSAxKTsgbnJuZWcgPD0gLW5ybG93ZXI7IG5ybmVnKyspIHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5WzMyNzY3ICsgbnJuZWddID0gY2F0O1xyXG4gICAgICAgICAgICAgICAgYml0Y29kZVszMjc2NyArIG5ybmVnXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYml0Y29kZVszMjc2NyArIG5ybmVnXVsxXSA9IGNhdDtcclxuICAgICAgICAgICAgICAgIGJpdGNvZGVbMzI3NjcgKyBucm5lZ11bMF0gPSBucnVwcGVyIC0gMSArIG5ybmVnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ybG93ZXIgPDw9IDE7XHJcbiAgICAgICAgICAgIG5ydXBwZXIgPDw9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRSR0JZVVZUYWJsZSgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XHJcbiAgICAgICAgICAgIFJHQl9ZVVZfVEFCTEVbaV0gPSAxOTU5NSAqIGk7XHJcbiAgICAgICAgICAgIFJHQl9ZVVZfVEFCTEVbKGkgKyAyNTYpID4+IDBdID0gMzg0NzAgKiBpO1xyXG4gICAgICAgICAgICBSR0JfWVVWX1RBQkxFWyhpICsgNTEyKSA+PiAwXSA9IDc0NzEgKiBpICsgMHg4MDAwO1xyXG4gICAgICAgICAgICBSR0JfWVVWX1RBQkxFWyhpICsgNzY4KSA+PiAwXSA9IC0xMTA1OSAqIGk7XHJcbiAgICAgICAgICAgIFJHQl9ZVVZfVEFCTEVbKGkgKyAxMDI0KSA+PiAwXSA9IC0yMTcwOSAqIGk7XHJcbiAgICAgICAgICAgIFJHQl9ZVVZfVEFCTEVbKGkgKyAxMjgwKSA+PiAwXSA9IDMyNzY4ICogaSArIDB4ODA3RkZGO1xyXG4gICAgICAgICAgICBSR0JfWVVWX1RBQkxFWyhpICsgMTUzNikgPj4gMF0gPSAtMjc0MzkgKiBpO1xyXG4gICAgICAgICAgICBSR0JfWVVWX1RBQkxFWyhpICsgMTc5MikgPj4gMF0gPSAtIDUzMjkgKiBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBJTyBmdW5jdGlvbnNcclxuICAgIGZ1bmN0aW9uIHdyaXRlQml0cyhicykge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGJzWzBdO1xyXG4gICAgICAgIHZhciBwb3N2YWwgPSBic1sxXSAtIDE7XHJcbiAgICAgICAgd2hpbGUgKHBvc3ZhbCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmICgxIDw8IHBvc3ZhbCkpIHtcclxuICAgICAgICAgICAgICAgIGJ5dGVuZXcgfD0gKDEgPDwgYnl0ZXBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9zdmFsLS07XHJcbiAgICAgICAgICAgIGJ5dGVwb3MtLTtcclxuICAgICAgICAgICAgaWYgKGJ5dGVwb3MgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnl0ZW5ldyA9PSAweEZGKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVCeXRlKDB4RkYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlQnl0ZSgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlQnl0ZShieXRlbmV3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ5dGVwb3MgPSA3O1xyXG4gICAgICAgICAgICAgICAgYnl0ZW5ldyA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd3JpdGVCeXRlKHZhbHVlKSB7XHJcbiAgICAgICAgLy9ieXRlb3V0LnB1c2goY2x0W3ZhbHVlXSk7IC8vIHdyaXRlIGNoYXIgZGlyZWN0bHkgaW5zdGVhZCBvZiBjb252ZXJ0aW5nIGxhdGVyXHJcbiAgICAgICAgYnl0ZW91dC5wdXNoKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3cml0ZVdvcmQodmFsdWUpIHtcclxuICAgICAgICB3cml0ZUJ5dGUoKHZhbHVlID4+IDgpICYgMHhGRik7XHJcbiAgICAgICAgd3JpdGVCeXRlKCh2YWx1ZSkgJiAweEZGKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEQ1QgJiBxdWFudGl6YXRpb24gY29yZVxyXG4gICAgZnVuY3Rpb24gZkRDVFF1YW50KGRhdGEsIGZkdGJsKSB7XHJcbiAgICAgICAgdmFyIGQwLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNztcclxuICAgICAgICAvKiBQYXNzIDE6IHByb2Nlc3Mgcm93cy4gKi9cclxuICAgICAgICB2YXIgZGF0YU9mZiA9IDA7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgdmFyIEk4ID0gODtcclxuICAgICAgICB2YXIgSTY0ID0gNjQ7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IEk4OyArK2kpIHtcclxuICAgICAgICAgICAgZDAgPSBkYXRhW2RhdGFPZmZdO1xyXG4gICAgICAgICAgICBkMSA9IGRhdGFbZGF0YU9mZiArIDFdO1xyXG4gICAgICAgICAgICBkMiA9IGRhdGFbZGF0YU9mZiArIDJdO1xyXG4gICAgICAgICAgICBkMyA9IGRhdGFbZGF0YU9mZiArIDNdO1xyXG4gICAgICAgICAgICBkNCA9IGRhdGFbZGF0YU9mZiArIDRdO1xyXG4gICAgICAgICAgICBkNSA9IGRhdGFbZGF0YU9mZiArIDVdO1xyXG4gICAgICAgICAgICBkNiA9IGRhdGFbZGF0YU9mZiArIDZdO1xyXG4gICAgICAgICAgICBkNyA9IGRhdGFbZGF0YU9mZiArIDddO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRtcDAgPSBkMCArIGQ3O1xyXG4gICAgICAgICAgICB2YXIgdG1wNyA9IGQwIC0gZDc7XHJcbiAgICAgICAgICAgIHZhciB0bXAxID0gZDEgKyBkNjtcclxuICAgICAgICAgICAgdmFyIHRtcDYgPSBkMSAtIGQ2O1xyXG4gICAgICAgICAgICB2YXIgdG1wMiA9IGQyICsgZDU7XHJcbiAgICAgICAgICAgIHZhciB0bXA1ID0gZDIgLSBkNTtcclxuICAgICAgICAgICAgdmFyIHRtcDMgPSBkMyArIGQ0O1xyXG4gICAgICAgICAgICB2YXIgdG1wNCA9IGQzIC0gZDQ7XHJcblxyXG4gICAgICAgICAgICAvKiBFdmVuIHBhcnQgKi9cclxuICAgICAgICAgICAgdmFyIHRtcDEwID0gdG1wMCArIHRtcDM7XHQvKiBwaGFzZSAyICovXHJcbiAgICAgICAgICAgIHZhciB0bXAxMyA9IHRtcDAgLSB0bXAzO1xyXG4gICAgICAgICAgICB2YXIgdG1wMTEgPSB0bXAxICsgdG1wMjtcclxuICAgICAgICAgICAgdmFyIHRtcDEyID0gdG1wMSAtIHRtcDI7XHJcblxyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmZdID0gdG1wMTAgKyB0bXAxMTsgLyogcGhhc2UgMyAqL1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyA0XSA9IHRtcDEwIC0gdG1wMTE7XHJcblxyXG4gICAgICAgICAgICB2YXIgejEgPSAodG1wMTIgKyB0bXAxMykgKiAwLjcwNzEwNjc4MTsgLyogYzQgKi9cclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgMl0gPSB0bXAxMyArIHoxOyAvKiBwaGFzZSA1ICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDZdID0gdG1wMTMgLSB6MTtcclxuXHJcbiAgICAgICAgICAgIC8qIE9kZCBwYXJ0ICovXHJcbiAgICAgICAgICAgIHRtcDEwID0gdG1wNCArIHRtcDU7IC8qIHBoYXNlIDIgKi9cclxuICAgICAgICAgICAgdG1wMTEgPSB0bXA1ICsgdG1wNjtcclxuICAgICAgICAgICAgdG1wMTIgPSB0bXA2ICsgdG1wNztcclxuXHJcbiAgICAgICAgICAgIC8qIFRoZSByb3RhdG9yIGlzIG1vZGlmaWVkIGZyb20gZmlnIDQtOCB0byBhdm9pZCBleHRyYSBuZWdhdGlvbnMuICovXHJcbiAgICAgICAgICAgIHZhciB6NSA9ICh0bXAxMCAtIHRtcDEyKSAqIDAuMzgyNjgzNDMzOyAvKiBjNiAqL1xyXG4gICAgICAgICAgICB2YXIgejIgPSAwLjU0MTE5NjEwMCAqIHRtcDEwICsgejU7IC8qIGMyLWM2ICovXHJcbiAgICAgICAgICAgIHZhciB6NCA9IDEuMzA2NTYyOTY1ICogdG1wMTIgKyB6NTsgLyogYzIrYzYgKi9cclxuICAgICAgICAgICAgdmFyIHozID0gdG1wMTEgKiAwLjcwNzEwNjc4MTsgLyogYzQgKi9cclxuXHJcbiAgICAgICAgICAgIHZhciB6MTEgPSB0bXA3ICsgejM7XHQvKiBwaGFzZSA1ICovXHJcbiAgICAgICAgICAgIHZhciB6MTMgPSB0bXA3IC0gejM7XHJcblxyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyA1XSA9IHoxMyArIHoyO1x0LyogcGhhc2UgNiAqL1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyAzXSA9IHoxMyAtIHoyO1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyAxXSA9IHoxMSArIHo0O1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyA3XSA9IHoxMSAtIHo0O1xyXG5cclxuICAgICAgICAgICAgZGF0YU9mZiArPSA4OyAvKiBhZHZhbmNlIHBvaW50ZXIgdG8gbmV4dCByb3cgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIFBhc3MgMjogcHJvY2VzcyBjb2x1bW5zLiAqL1xyXG4gICAgICAgIGRhdGFPZmYgPSAwO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBJODsgKytpKSB7XHJcbiAgICAgICAgICAgIGQwID0gZGF0YVtkYXRhT2ZmXTtcclxuICAgICAgICAgICAgZDEgPSBkYXRhW2RhdGFPZmYgKyA4XTtcclxuICAgICAgICAgICAgZDIgPSBkYXRhW2RhdGFPZmYgKyAxNl07XHJcbiAgICAgICAgICAgIGQzID0gZGF0YVtkYXRhT2ZmICsgMjRdO1xyXG4gICAgICAgICAgICBkNCA9IGRhdGFbZGF0YU9mZiArIDMyXTtcclxuICAgICAgICAgICAgZDUgPSBkYXRhW2RhdGFPZmYgKyA0MF07XHJcbiAgICAgICAgICAgIGQ2ID0gZGF0YVtkYXRhT2ZmICsgNDhdO1xyXG4gICAgICAgICAgICBkNyA9IGRhdGFbZGF0YU9mZiArIDU2XTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0bXAwcDIgPSBkMCArIGQ3O1xyXG4gICAgICAgICAgICB2YXIgdG1wN3AyID0gZDAgLSBkNztcclxuICAgICAgICAgICAgdmFyIHRtcDFwMiA9IGQxICsgZDY7XHJcbiAgICAgICAgICAgIHZhciB0bXA2cDIgPSBkMSAtIGQ2O1xyXG4gICAgICAgICAgICB2YXIgdG1wMnAyID0gZDIgKyBkNTtcclxuICAgICAgICAgICAgdmFyIHRtcDVwMiA9IGQyIC0gZDU7XHJcbiAgICAgICAgICAgIHZhciB0bXAzcDIgPSBkMyArIGQ0O1xyXG4gICAgICAgICAgICB2YXIgdG1wNHAyID0gZDMgLSBkNDtcclxuXHJcbiAgICAgICAgICAgIC8qIEV2ZW4gcGFydCAqL1xyXG4gICAgICAgICAgICB2YXIgdG1wMTBwMiA9IHRtcDBwMiArIHRtcDNwMjtcdC8qIHBoYXNlIDIgKi9cclxuICAgICAgICAgICAgdmFyIHRtcDEzcDIgPSB0bXAwcDIgLSB0bXAzcDI7XHJcbiAgICAgICAgICAgIHZhciB0bXAxMXAyID0gdG1wMXAyICsgdG1wMnAyO1xyXG4gICAgICAgICAgICB2YXIgdG1wMTJwMiA9IHRtcDFwMiAtIHRtcDJwMjtcclxuXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZl0gPSB0bXAxMHAyICsgdG1wMTFwMjsgLyogcGhhc2UgMyAqL1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyAzMl0gPSB0bXAxMHAyIC0gdG1wMTFwMjtcclxuXHJcbiAgICAgICAgICAgIHZhciB6MXAyID0gKHRtcDEycDIgKyB0bXAxM3AyKSAqIDAuNzA3MTA2NzgxOyAvKiBjNCAqL1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyAxNl0gPSB0bXAxM3AyICsgejFwMjsgLyogcGhhc2UgNSAqL1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyA0OF0gPSB0bXAxM3AyIC0gejFwMjtcclxuXHJcbiAgICAgICAgICAgIC8qIE9kZCBwYXJ0ICovXHJcbiAgICAgICAgICAgIHRtcDEwcDIgPSB0bXA0cDIgKyB0bXA1cDI7IC8qIHBoYXNlIDIgKi9cclxuICAgICAgICAgICAgdG1wMTFwMiA9IHRtcDVwMiArIHRtcDZwMjtcclxuICAgICAgICAgICAgdG1wMTJwMiA9IHRtcDZwMiArIHRtcDdwMjtcclxuXHJcbiAgICAgICAgICAgIC8qIFRoZSByb3RhdG9yIGlzIG1vZGlmaWVkIGZyb20gZmlnIDQtOCB0byBhdm9pZCBleHRyYSBuZWdhdGlvbnMuICovXHJcbiAgICAgICAgICAgIHZhciB6NXAyID0gKHRtcDEwcDIgLSB0bXAxMnAyKSAqIDAuMzgyNjgzNDMzOyAvKiBjNiAqL1xyXG4gICAgICAgICAgICB2YXIgejJwMiA9IDAuNTQxMTk2MTAwICogdG1wMTBwMiArIHo1cDI7IC8qIGMyLWM2ICovXHJcbiAgICAgICAgICAgIHZhciB6NHAyID0gMS4zMDY1NjI5NjUgKiB0bXAxMnAyICsgejVwMjsgLyogYzIrYzYgKi9cclxuICAgICAgICAgICAgdmFyIHozcDIgPSB0bXAxMXAyICogMC43MDcxMDY3ODE7IC8qIGM0ICovXHJcblxyXG4gICAgICAgICAgICB2YXIgejExcDIgPSB0bXA3cDIgKyB6M3AyO1x0LyogcGhhc2UgNSAqL1xyXG4gICAgICAgICAgICB2YXIgejEzcDIgPSB0bXA3cDIgLSB6M3AyO1xyXG5cclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgNDBdID0gejEzcDIgKyB6MnAyOyAvKiBwaGFzZSA2ICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDI0XSA9IHoxM3AyIC0gejJwMjtcclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgOF0gPSB6MTFwMiArIHo0cDI7XHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDU2XSA9IHoxMXAyIC0gejRwMjtcclxuXHJcbiAgICAgICAgICAgIGRhdGFPZmYrKzsgLyogYWR2YW5jZSBwb2ludGVyIHRvIG5leHQgY29sdW1uICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBRdWFudGl6ZS9kZXNjYWxlIHRoZSBjb2VmZmljaWVudHNcclxuICAgICAgICB2YXIgZkRDVFF1YW50O1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBJNjQ7ICsraSkge1xyXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgcXVhbnRpemF0aW9uIGFuZCBzY2FsaW5nIGZhY3RvciAmIFJvdW5kIHRvIG5lYXJlc3QgaW50ZWdlclxyXG4gICAgICAgICAgICBmRENUUXVhbnQgPSBkYXRhW2ldICogZmR0YmxbaV07XHJcbiAgICAgICAgICAgIG91dHB1dGZEQ1RRdWFudFtpXSA9IChmRENUUXVhbnQgPiAwLjApID8gKChmRENUUXVhbnQgKyAwLjUpIHwgMCkgOiAoKGZEQ1RRdWFudCAtIDAuNSkgfCAwKTtcclxuICAgICAgICAgICAgLy9vdXRwdXRmRENUUXVhbnRbaV0gPSBmcm91bmQoZkRDVFF1YW50KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXRmRENUUXVhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd3JpdGVBUFAwKCkge1xyXG4gICAgICAgIHdyaXRlV29yZCgweEZGRTApOyAvLyBtYXJrZXJcclxuICAgICAgICB3cml0ZVdvcmQoMTYpOyAvLyBsZW5ndGhcclxuICAgICAgICB3cml0ZUJ5dGUoMHg0QSk7IC8vIEpcclxuICAgICAgICB3cml0ZUJ5dGUoMHg0Nik7IC8vIEZcclxuICAgICAgICB3cml0ZUJ5dGUoMHg0OSk7IC8vIElcclxuICAgICAgICB3cml0ZUJ5dGUoMHg0Nik7IC8vIEZcclxuICAgICAgICB3cml0ZUJ5dGUoMCk7IC8vID0gXCJKRklGXCIsJ1xcMCdcclxuICAgICAgICB3cml0ZUJ5dGUoMSk7IC8vIHZlcnNpb25oaVxyXG4gICAgICAgIHdyaXRlQnl0ZSgxKTsgLy8gdmVyc2lvbmxvXHJcbiAgICAgICAgd3JpdGVCeXRlKDApOyAvLyB4eXVuaXRzXHJcbiAgICAgICAgd3JpdGVXb3JkKDEpOyAvLyB4ZGVuc2l0eVxyXG4gICAgICAgIHdyaXRlV29yZCgxKTsgLy8geWRlbnNpdHlcclxuICAgICAgICB3cml0ZUJ5dGUoMCk7IC8vIHRodW1ibndpZHRoXHJcbiAgICAgICAgd3JpdGVCeXRlKDApOyAvLyB0aHVtYm5oZWlnaHRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3cml0ZUFQUDEoZXhpZkJ1ZmZlcikge1xyXG4gICAgICAgIGlmICghZXhpZkJ1ZmZlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICB3cml0ZVdvcmQoMHhGRkUxKTsgLy8gQVBQMSBtYXJrZXJcclxuXHJcbiAgICAgICAgaWYgKGV4aWZCdWZmZXJbMF0gPT09IDB4NDUgJiZcclxuICAgICAgICAgICAgZXhpZkJ1ZmZlclsxXSA9PT0gMHg3OCAmJlxyXG4gICAgICAgICAgICBleGlmQnVmZmVyWzJdID09PSAweDY5ICYmXHJcbiAgICAgICAgICAgIGV4aWZCdWZmZXJbM10gPT09IDB4NjYpIHtcclxuICAgICAgICAgICAgLy8gQnVmZmVyIGFscmVhZHkgc3RhcnRzIHdpdGggRVhJRiwganVzdCB1c2UgaXQgZGlyZWN0bHlcclxuICAgICAgICAgICAgd3JpdGVXb3JkKGV4aWZCdWZmZXIubGVuZ3RoICsgMik7IC8vIGxlbmd0aCBpcyBidWZmZXIgKyBsZW5ndGggaXRzZWxmIVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEJ1ZmZlciBkb2Vzbid0IHN0YXJ0IHdpdGggRVhJRiwgd3JpdGUgaXQgZm9yIHRoZW1cclxuICAgICAgICAgICAgd3JpdGVXb3JkKGV4aWZCdWZmZXIubGVuZ3RoICsgNSArIDIpOyAvLyBsZW5ndGggaXMgYnVmZmVyICsgRVhJRlxcMCArIGxlbmd0aCBpdHNlbGYhXHJcbiAgICAgICAgICAgIHdyaXRlQnl0ZSgweDQ1KTsgLy8gRVxyXG4gICAgICAgICAgICB3cml0ZUJ5dGUoMHg3OCk7IC8vIFhcclxuICAgICAgICAgICAgd3JpdGVCeXRlKDB4NjkpOyAvLyBJXHJcbiAgICAgICAgICAgIHdyaXRlQnl0ZSgweDY2KTsgLy8gRlxyXG4gICAgICAgICAgICB3cml0ZUJ5dGUoMCk7IC8vID0gXCJFWElGXCIsJ1xcMCdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhpZkJ1ZmZlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB3cml0ZUJ5dGUoZXhpZkJ1ZmZlcltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdyaXRlU09GMCh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgd3JpdGVXb3JkKDB4RkZDMCk7IC8vIG1hcmtlclxyXG4gICAgICAgIHdyaXRlV29yZCgxNyk7ICAgLy8gbGVuZ3RoLCB0cnVlY29sb3IgWVVWIEpQR1xyXG4gICAgICAgIHdyaXRlQnl0ZSg4KTsgICAgLy8gcHJlY2lzaW9uXHJcbiAgICAgICAgd3JpdGVXb3JkKGhlaWdodCk7XHJcbiAgICAgICAgd3JpdGVXb3JkKHdpZHRoKTtcclxuICAgICAgICB3cml0ZUJ5dGUoMyk7ICAgIC8vIG5yb2Zjb21wb25lbnRzXHJcbiAgICAgICAgd3JpdGVCeXRlKDEpOyAgICAvLyBJZFlcclxuICAgICAgICB3cml0ZUJ5dGUoMHgxMSk7IC8vIEhWWVxyXG4gICAgICAgIHdyaXRlQnl0ZSgwKTsgICAgLy8gUVRZXHJcbiAgICAgICAgd3JpdGVCeXRlKDIpOyAgICAvLyBJZFVcclxuICAgICAgICB3cml0ZUJ5dGUoMHgxMSk7IC8vIEhWVVxyXG4gICAgICAgIHdyaXRlQnl0ZSgxKTsgICAgLy8gUVRVXHJcbiAgICAgICAgd3JpdGVCeXRlKDMpOyAgICAvLyBJZFZcclxuICAgICAgICB3cml0ZUJ5dGUoMHgxMSk7IC8vIEhWVlxyXG4gICAgICAgIHdyaXRlQnl0ZSgxKTsgICAgLy8gUVRWXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd3JpdGVEUVQoKSB7XHJcbiAgICAgICAgd3JpdGVXb3JkKDB4RkZEQik7IC8vIG1hcmtlclxyXG4gICAgICAgIHdyaXRlV29yZCgxMzIpO1x0ICAgLy8gbGVuZ3RoXHJcbiAgICAgICAgd3JpdGVCeXRlKDApO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjQ7IGkrKykge1xyXG4gICAgICAgICAgICB3cml0ZUJ5dGUoWVRhYmxlW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd3JpdGVCeXRlKDEpO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNjQ7IGorKykge1xyXG4gICAgICAgICAgICB3cml0ZUJ5dGUoVVZUYWJsZVtqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdyaXRlREhUKCkge1xyXG4gICAgICAgIHdyaXRlV29yZCgweEZGQzQpOyAvLyBtYXJrZXJcclxuICAgICAgICB3cml0ZVdvcmQoMHgwMUEyKTsgLy8gbGVuZ3RoXHJcblxyXG4gICAgICAgIHdyaXRlQnl0ZSgwKTsgLy8gSFRZRENpbmZvXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHdyaXRlQnl0ZShzdGRfZGNfbHVtaW5hbmNlX25yY29kZXNbaSArIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPD0gMTE7IGorKykge1xyXG4gICAgICAgICAgICB3cml0ZUJ5dGUoc3RkX2RjX2x1bWluYW5jZV92YWx1ZXNbal0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd3JpdGVCeXRlKDB4MTApOyAvLyBIVFlBQ2luZm9cclxuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IDE2OyBrKyspIHtcclxuICAgICAgICAgICAgd3JpdGVCeXRlKHN0ZF9hY19sdW1pbmFuY2VfbnJjb2Rlc1trICsgMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBsID0gMDsgbCA8PSAxNjE7IGwrKykge1xyXG4gICAgICAgICAgICB3cml0ZUJ5dGUoc3RkX2FjX2x1bWluYW5jZV92YWx1ZXNbbF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd3JpdGVCeXRlKDEpOyAvLyBIVFVEQ2luZm9cclxuICAgICAgICBmb3IgKHZhciBtID0gMDsgbSA8IDE2OyBtKyspIHtcclxuICAgICAgICAgICAgd3JpdGVCeXRlKHN0ZF9kY19jaHJvbWluYW5jZV9ucmNvZGVzW20gKyAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDw9IDExOyBuKyspIHtcclxuICAgICAgICAgICAgd3JpdGVCeXRlKHN0ZF9kY19jaHJvbWluYW5jZV92YWx1ZXNbbl0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd3JpdGVCeXRlKDB4MTEpOyAvLyBIVFVBQ2luZm9cclxuICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IDE2OyBvKyspIHtcclxuICAgICAgICAgICAgd3JpdGVCeXRlKHN0ZF9hY19jaHJvbWluYW5jZV9ucmNvZGVzW28gKyAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIHAgPSAwOyBwIDw9IDE2MTsgcCsrKSB7XHJcbiAgICAgICAgICAgIHdyaXRlQnl0ZShzdGRfYWNfY2hyb21pbmFuY2VfdmFsdWVzW3BdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd3JpdGVDT00oY29tbWVudHMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNvbW1lbnRzID09PSBcInVuZGVmaW5lZFwiIHx8IGNvbW1lbnRzLmNvbnN0cnVjdG9yICE9PSBBcnJheSkgcmV0dXJuO1xyXG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZSAhPT0gXCJzdHJpbmdcIikgcmV0dXJuO1xyXG4gICAgICAgICAgICB3cml0ZVdvcmQoMHhGRkZFKTsgLy8gbWFya2VyXHJcbiAgICAgICAgICAgIHZhciBsID0gZS5sZW5ndGg7XHJcbiAgICAgICAgICAgIHdyaXRlV29yZChsICsgMik7IC8vIGxlbmd0aCBpdHNlbGYgYXMgd2VsbFxyXG4gICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKylcclxuICAgICAgICAgICAgICAgIHdyaXRlQnl0ZShlLmNoYXJDb2RlQXQoaSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdyaXRlU09TKCkge1xyXG4gICAgICAgIHdyaXRlV29yZCgweEZGREEpOyAvLyBtYXJrZXJcclxuICAgICAgICB3cml0ZVdvcmQoMTIpOyAvLyBsZW5ndGhcclxuICAgICAgICB3cml0ZUJ5dGUoMyk7IC8vIG5yb2Zjb21wb25lbnRzXHJcbiAgICAgICAgd3JpdGVCeXRlKDEpOyAvLyBJZFlcclxuICAgICAgICB3cml0ZUJ5dGUoMCk7IC8vIEhUWVxyXG4gICAgICAgIHdyaXRlQnl0ZSgyKTsgLy8gSWRVXHJcbiAgICAgICAgd3JpdGVCeXRlKDB4MTEpOyAvLyBIVFVcclxuICAgICAgICB3cml0ZUJ5dGUoMyk7IC8vIElkVlxyXG4gICAgICAgIHdyaXRlQnl0ZSgweDExKTsgLy8gSFRWXHJcbiAgICAgICAgd3JpdGVCeXRlKDApOyAvLyBTc1xyXG4gICAgICAgIHdyaXRlQnl0ZSgweDNmKTsgLy8gU2VcclxuICAgICAgICB3cml0ZUJ5dGUoMCk7IC8vIEJmXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0RVKENEVSwgZmR0YmwsIERDLCBIVERDLCBIVEFDKSB7XHJcbiAgICAgICAgdmFyIEVPQiA9IEhUQUNbMHgwMF07XHJcbiAgICAgICAgdmFyIE0xNnplcm9lcyA9IEhUQUNbMHhGMF07XHJcbiAgICAgICAgdmFyIHBvcztcclxuICAgICAgICB2YXIgSTE2ID0gMTY7XHJcbiAgICAgICAgdmFyIEk2MyA9IDYzO1xyXG4gICAgICAgIHZhciBJNjQgPSA2NDtcclxuICAgICAgICB2YXIgRFVfRENUID0gZkRDVFF1YW50KENEVSwgZmR0YmwpO1xyXG4gICAgICAgIC8vWmlnWmFnIHJlb3JkZXJcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IEk2NDsgKytqKSB7XHJcbiAgICAgICAgICAgIERVW1ppZ1phZ1tqXV0gPSBEVV9EQ1Rbal07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBEaWZmID0gRFVbMF0gLSBEQzsgREMgPSBEVVswXTtcclxuICAgICAgICAvL0VuY29kZSBEQ1xyXG4gICAgICAgIGlmIChEaWZmID09IDApIHtcclxuICAgICAgICAgICAgd3JpdGVCaXRzKEhURENbMF0pOyAvLyBEaWZmIG1pZ2h0IGJlIDBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3MgPSAzMjc2NyArIERpZmY7XHJcbiAgICAgICAgICAgIHdyaXRlQml0cyhIVERDW2NhdGVnb3J5W3Bvc11dKTtcclxuICAgICAgICAgICAgd3JpdGVCaXRzKGJpdGNvZGVbcG9zXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vRW5jb2RlIEFDc1xyXG4gICAgICAgIHZhciBlbmQwcG9zID0gNjM7IC8vIHdhcyBjb25zdC4uLiB3aGljaCBpcyBjcmF6eVxyXG4gICAgICAgIGZvciAoOyAoZW5kMHBvcyA+IDApICYmIChEVVtlbmQwcG9zXSA9PSAwKTsgZW5kMHBvcy0tKSB7IH07XHJcbiAgICAgICAgLy9lbmQwcG9zID0gZmlyc3QgZWxlbWVudCBpbiByZXZlcnNlIG9yZGVyICE9MFxyXG4gICAgICAgIGlmIChlbmQwcG9zID09IDApIHtcclxuICAgICAgICAgICAgd3JpdGVCaXRzKEVPQik7XHJcbiAgICAgICAgICAgIHJldHVybiBEQztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGkgPSAxO1xyXG4gICAgICAgIHZhciBsbmc7XHJcbiAgICAgICAgd2hpbGUgKGkgPD0gZW5kMHBvcykge1xyXG4gICAgICAgICAgICB2YXIgc3RhcnRwb3MgPSBpO1xyXG4gICAgICAgICAgICBmb3IgKDsgKERVW2ldID09IDApICYmIChpIDw9IGVuZDBwb3MpOyArK2kpIHsgfVxyXG4gICAgICAgICAgICB2YXIgbnJ6ZXJvZXMgPSBpIC0gc3RhcnRwb3M7XHJcbiAgICAgICAgICAgIGlmIChucnplcm9lcyA+PSBJMTYpIHtcclxuICAgICAgICAgICAgICAgIGxuZyA9IG5yemVyb2VzID4+IDQ7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBucm1hcmtlciA9IDE7IG5ybWFya2VyIDw9IGxuZzsgKytucm1hcmtlcilcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZUJpdHMoTTE2emVyb2VzKTtcclxuICAgICAgICAgICAgICAgIG5yemVyb2VzID0gbnJ6ZXJvZXMgJiAweEY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9zID0gMzI3NjcgKyBEVVtpXTtcclxuICAgICAgICAgICAgd3JpdGVCaXRzKEhUQUNbKG5yemVyb2VzIDw8IDQpICsgY2F0ZWdvcnlbcG9zXV0pO1xyXG4gICAgICAgICAgICB3cml0ZUJpdHMoYml0Y29kZVtwb3NdKTtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW5kMHBvcyAhPSBJNjMpIHtcclxuICAgICAgICAgICAgd3JpdGVCaXRzKEVPQik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBEQztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Q2hhckxvb2t1cFRhYmxlKCkge1xyXG4gICAgICAgIHZhciBzZmNjID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgaSsrKSB7IC8vLy8vIEFDSFRVTkcgLy8gMjU1XHJcbiAgICAgICAgICAgIGNsdFtpXSA9IHNmY2MoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZW5jb2RlID0gZnVuY3Rpb24gKGltYWdlLCBxdWFsaXR5KSAvLyBpbWFnZSBkYXRhIG9iamVjdFxyXG4gICAge1xyXG4gICAgICAgIHZhciB0aW1lX3N0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgIGlmIChxdWFsaXR5KSBzZXRRdWFsaXR5KHF1YWxpdHkpO1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplIGJpdCB3cml0ZXJcclxuICAgICAgICBieXRlb3V0ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgYnl0ZW5ldyA9IDA7XHJcbiAgICAgICAgYnl0ZXBvcyA9IDc7XHJcblxyXG4gICAgICAgIC8vIEFkZCBKUEVHIGhlYWRlcnNcclxuICAgICAgICB3cml0ZVdvcmQoMHhGRkQ4KTsgLy8gU09JXHJcbiAgICAgICAgd3JpdGVBUFAwKCk7XHJcbiAgICAgICAgd3JpdGVDT00oaW1hZ2UuY29tbWVudHMpO1xyXG4gICAgICAgIHdyaXRlQVBQMShpbWFnZS5leGlmQnVmZmVyKTtcclxuICAgICAgICB3cml0ZURRVCgpO1xyXG4gICAgICAgIHdyaXRlU09GMChpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcclxuICAgICAgICB3cml0ZURIVCgpO1xyXG4gICAgICAgIHdyaXRlU09TKCk7XHJcblxyXG5cclxuICAgICAgICAvLyBFbmNvZGUgOHg4IG1hY3JvYmxvY2tzXHJcbiAgICAgICAgdmFyIERDWSA9IDA7XHJcbiAgICAgICAgdmFyIERDVSA9IDA7XHJcbiAgICAgICAgdmFyIERDViA9IDA7XHJcblxyXG4gICAgICAgIGJ5dGVuZXcgPSAwO1xyXG4gICAgICAgIGJ5dGVwb3MgPSA3O1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5lbmNvZGUuZGlzcGxheU5hbWUgPSBcIl9lbmNvZGVfXCI7XHJcblxyXG4gICAgICAgIHZhciBpbWFnZURhdGEgPSBpbWFnZS5kYXRhO1xyXG4gICAgICAgIHZhciB3aWR0aCA9IGltYWdlLndpZHRoO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHZhciBxdWFkV2lkdGggPSB3aWR0aCAqIDQ7XHJcbiAgICAgICAgdmFyIHRyaXBsZVdpZHRoID0gd2lkdGggKiAzO1xyXG5cclxuICAgICAgICB2YXIgeCwgeSA9IDA7XHJcbiAgICAgICAgdmFyIHIsIGcsIGI7XHJcbiAgICAgICAgdmFyIHN0YXJ0LCBwLCBjb2wsIHJvdywgcG9zO1xyXG4gICAgICAgIHdoaWxlICh5IDwgaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHggPSAwO1xyXG4gICAgICAgICAgICB3aGlsZSAoeCA8IHF1YWRXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBxdWFkV2lkdGggKiB5ICsgeDtcclxuICAgICAgICAgICAgICAgIHAgPSBzdGFydDtcclxuICAgICAgICAgICAgICAgIGNvbCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgcm93ID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHBvcyA9IDA7IHBvcyA8IDY0OyBwb3MrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IHBvcyA+PiAzOy8vIC84XHJcbiAgICAgICAgICAgICAgICAgICAgY29sID0gKHBvcyAmIDcpICogNDsgLy8gJThcclxuICAgICAgICAgICAgICAgICAgICBwID0gc3RhcnQgKyAocm93ICogcXVhZFdpZHRoKSArIGNvbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkgKyByb3cgPj0gaGVpZ2h0KSB7IC8vIHBhZGRpbmcgYm90dG9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgLT0gKHF1YWRXaWR0aCAqICh5ICsgMSArIHJvdyAtIGhlaWdodCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggKyBjb2wgPj0gcXVhZFdpZHRoKSB7IC8vIHBhZGRpbmcgcmlnaHRcdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwIC09ICgoeCArIGNvbCkgLSBxdWFkV2lkdGggKyA0KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgciA9IGltYWdlRGF0YVtwKytdO1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBpbWFnZURhdGFbcCsrXTtcclxuICAgICAgICAgICAgICAgICAgICBiID0gaW1hZ2VEYXRhW3ArK107XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiAvLyBjYWxjdWxhdGUgWVVWIHZhbHVlcyBkeW5hbWljYWxseVxyXG4gICAgICAgICAgICAgICAgICAgIFlEVVtwb3NdPSgoKCAwLjI5OTAwKSpyKyggMC41ODcwMCkqZysoIDAuMTE0MDApKmIpKS0xMjg7IC8vLTB4ODBcclxuICAgICAgICAgICAgICAgICAgICBVRFVbcG9zXT0oKCgtMC4xNjg3NCkqcisoLTAuMzMxMjYpKmcrKCAwLjUwMDAwKSpiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgVkRVW3Bvc109KCgoIDAuNTAwMDApKnIrKC0wLjQxODY5KSpnKygtMC4wODEzMSkqYikpO1xyXG4gICAgICAgICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVzZSBsb29rdXAgdGFibGUgKHNsaWdodGx5IGZhc3RlcilcclxuICAgICAgICAgICAgICAgICAgICBZRFVbcG9zXSA9ICgoUkdCX1lVVl9UQUJMRVtyXSArIFJHQl9ZVVZfVEFCTEVbKGcgKyAyNTYpID4+IDBdICsgUkdCX1lVVl9UQUJMRVsoYiArIDUxMikgPj4gMF0pID4+IDE2KSAtIDEyODtcclxuICAgICAgICAgICAgICAgICAgICBVRFVbcG9zXSA9ICgoUkdCX1lVVl9UQUJMRVsociArIDc2OCkgPj4gMF0gKyBSR0JfWVVWX1RBQkxFWyhnICsgMTAyNCkgPj4gMF0gKyBSR0JfWVVWX1RBQkxFWyhiICsgMTI4MCkgPj4gMF0pID4+IDE2KSAtIDEyODtcclxuICAgICAgICAgICAgICAgICAgICBWRFVbcG9zXSA9ICgoUkdCX1lVVl9UQUJMRVsociArIDEyODApID4+IDBdICsgUkdCX1lVVl9UQUJMRVsoZyArIDE1MzYpID4+IDBdICsgUkdCX1lVVl9UQUJMRVsoYiArIDE3OTIpID4+IDBdKSA+PiAxNikgLSAxMjg7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIERDWSA9IHByb2Nlc3NEVShZRFUsIGZkdGJsX1ksIERDWSwgWURDX0hULCBZQUNfSFQpO1xyXG4gICAgICAgICAgICAgICAgRENVID0gcHJvY2Vzc0RVKFVEVSwgZmR0YmxfVVYsIERDVSwgVVZEQ19IVCwgVVZBQ19IVCk7XHJcbiAgICAgICAgICAgICAgICBEQ1YgPSBwcm9jZXNzRFUoVkRVLCBmZHRibF9VViwgRENWLCBVVkRDX0hULCBVVkFDX0hUKTtcclxuICAgICAgICAgICAgICAgIHggKz0gMzI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeSArPSA4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgLy8gRG8gdGhlIGJpdCBhbGlnbm1lbnQgb2YgdGhlIEVPSSBtYXJrZXJcclxuICAgICAgICBpZiAoYnl0ZXBvcyA+PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBmaWxsYml0cyA9IFtdO1xyXG4gICAgICAgICAgICBmaWxsYml0c1sxXSA9IGJ5dGVwb3MgKyAxO1xyXG4gICAgICAgICAgICBmaWxsYml0c1swXSA9ICgxIDw8IChieXRlcG9zICsgMSkpIC0gMTtcclxuICAgICAgICAgICAgd3JpdGVCaXRzKGZpbGxiaXRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdyaXRlV29yZCgweEZGRDkpOyAvL0VPSVxyXG5cclxuICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShieXRlb3V0KTtcclxuICAgICAgXHJcbiAgICAgICAgdmFyIGpwZWdEYXRhVXJpID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsJyArIGJ0b2EoYnl0ZW91dC5qb2luKCcnKSk7XHJcblxyXG4gICAgICAgIGJ5dGVvdXQgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gYmVuY2htYXJraW5nXHJcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aW1lX3N0YXJ0O1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ0VuY29kaW5nIHRpbWU6ICcrIGR1cmF0aW9uICsgJ21zJyk7XHJcbiAgICAgICAgLy9cclxuXHJcbiAgICAgICAgcmV0dXJuIGpwZWdEYXRhVXJpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0UXVhbGl0eShxdWFsaXR5KSB7XHJcbiAgICAgICAgaWYgKHF1YWxpdHkgPD0gMCkge1xyXG4gICAgICAgICAgICBxdWFsaXR5ID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHF1YWxpdHkgPiAxMDApIHtcclxuICAgICAgICAgICAgcXVhbGl0eSA9IDEwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50UXVhbGl0eSA9PSBxdWFsaXR5KSByZXR1cm4gLy8gZG9uJ3QgcmVjYWxjIGlmIHVuY2hhbmdlZFxyXG5cclxuICAgICAgICB2YXIgc2YgPSAwO1xyXG4gICAgICAgIGlmIChxdWFsaXR5IDwgNTApIHtcclxuICAgICAgICAgICAgc2YgPSBNYXRoLmZsb29yKDUwMDAgLyBxdWFsaXR5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZiA9IE1hdGguZmxvb3IoMjAwIC0gcXVhbGl0eSAqIDIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5pdFF1YW50VGFibGVzKHNmKTtcclxuICAgICAgICBjdXJyZW50UXVhbGl0eSA9IHF1YWxpdHk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnUXVhbGl0eSBzZXQgdG86ICcrcXVhbGl0eSArJyUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIHZhciB0aW1lX3N0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgaWYgKCFxdWFsaXR5KSBxdWFsaXR5ID0gNTA7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHRhYmxlc1xyXG4gICAgICAgIGluaXRDaGFyTG9va3VwVGFibGUoKVxyXG4gICAgICAgIGluaXRIdWZmbWFuVGJsKCk7XHJcbiAgICAgICAgaW5pdENhdGVnb3J5TnVtYmVyKCk7XHJcbiAgICAgICAgaW5pdFJHQllVVlRhYmxlKCk7XHJcblxyXG4gICAgICAgIHNldFF1YWxpdHkocXVhbGl0eSk7XHJcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aW1lX3N0YXJ0O1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ0luaXRpYWxpemF0aW9uICcrIGR1cmF0aW9uICsgJ21zJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpO1xyXG5cclxufTtcclxuXHJcbiBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVKUEcoaW1nRGF0YSwgcXUpIHtcclxuICAgIGlmICh0eXBlb2YgcXUgPT09ICd1bmRlZmluZWQnKSBxdSA9IDUwO1xyXG4gICAgdmFyIGVuY29kZXIgPSBuZXcgSlBFR0VuY29kZXIocXUpO1xyXG4gICAgdmFyIGRhdGEgPSBlbmNvZGVyLmVuY29kZShpbWdEYXRhLCBxdSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgd2lkdGg6IGltZ0RhdGEud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBpbWdEYXRhLmhlaWdodCxcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIGhlbHBlciBmdW5jdGlvbiB0byBnZXQgdGhlIGltYWdlRGF0YSBvZiBhbiBleGlzdGluZyBpbWFnZSBvbiB0aGUgY3VycmVudCBwYWdlLlxyXG5mdW5jdGlvbiBnZXRJbWFnZURhdGFGcm9tSW1hZ2UoaWRPckVsZW1lbnQpIHtcclxuICAgIHZhciB0aGVJbWcgPSAodHlwZW9mIChpZE9yRWxlbWVudCkgPT0gJ3N0cmluZycpID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRPckVsZW1lbnQpIDogaWRPckVsZW1lbnQ7XHJcbiAgICB2YXIgY3ZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjdnMud2lkdGggPSB0aGVJbWcud2lkdGg7XHJcbiAgICBjdnMuaGVpZ2h0ID0gdGhlSW1nLmhlaWdodDtcclxuICAgIHZhciBjdHggPSBjdnMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgY3R4LmRyYXdJbWFnZSh0aGVJbWcsIDAsIDApO1xyXG5cclxuICAgIHJldHVybiAoY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjdnMud2lkdGgsIGN2cy5oZWlnaHQpKTtcclxufVxyXG5cclxuXHJcblxyXG4gIC8vaHR0cHM6Ly9naXRodWIuY29tL2pwZWctanMvanBlZy1qcy9ibG9iL21hc3Rlci9saWIvZW5jb2Rlci5qcyJdfQ==
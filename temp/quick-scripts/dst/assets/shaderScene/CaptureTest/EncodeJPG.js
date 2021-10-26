
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
// shaderScene/CaptureTest/EncodeJPG.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9DYXB0dXJlVGVzdC9FbmNvZGVKUEcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEyQkU7QUFDRjs7O0VBR0U7OztBQUVGLHNDQUFzQztBQUN0QyxrREFBa0Q7QUFDbEQsS0FBSztBQUVMLFNBQVMsV0FBVyxDQUFDLE9BQU87SUFDeEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDeEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN4QixJQUFJLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQixJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixJQUFJLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QixJQUFJLE1BQU0sQ0FBQztJQUNYLElBQUksT0FBTyxDQUFDO0lBQ1osSUFBSSxNQUFNLENBQUM7SUFDWCxJQUFJLE9BQU8sQ0FBQztJQUVaLElBQUksT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLElBQUksUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLElBQUksZUFBZSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLElBQUksRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDaEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBRWhCLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLElBQUksYUFBYSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLElBQUksY0FBYyxDQUFDO0lBRW5CLElBQUksTUFBTSxHQUFHO1FBQ1QsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDMUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDM0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDNUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDN0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDOUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDOUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDOUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7S0FDakMsQ0FBQztJQUVGLElBQUksd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkYsSUFBSSx1QkFBdUIsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckUsSUFBSSx3QkFBd0IsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RixJQUFJLHVCQUF1QixHQUFHO1FBQzFCLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUVGLElBQUksMEJBQTBCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckYsSUFBSSx5QkFBeUIsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkUsSUFBSSwwQkFBMEIsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RixJQUFJLHlCQUF5QixHQUFHO1FBQzVCLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUVGLFNBQVMsZUFBZSxDQUFDLEVBQUU7UUFDdkIsSUFBSSxHQUFHLEdBQUc7WUFDTixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUM5QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUM5QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUM5QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUM5QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNoQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNoQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztZQUNsQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtTQUNwQyxDQUFDO1FBRUYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcs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QUFLO1FBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtLQUN6QixDQUFDO0FBQ04sQ0FBQztBQVRELDhCQVNDO0FBRUQsaUZBQWlGO0FBQ2pGLFNBQVMscUJBQXFCLENBQUMsV0FBVztJQUN0QyxJQUFJLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQ3JHLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsR0FBRyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3pCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUMzQixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUlDLCtEQUErRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgQ29weXJpZ2h0IChjKSAyMDA4LCBBZG9iZSBTeXN0ZW1zIEluY29ycG9yYXRlZFxyXG4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAgUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IFxyXG4gIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcclxuICBtZXQ6XHJcbiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIFxyXG4gICAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICBcclxuICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XHJcbiAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIFxyXG4gICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cclxuICBcclxuICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQgbm9yIHRoZSBuYW1lcyBvZiBpdHMgXHJcbiAgICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSBcclxuICAgIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTXHJcbiAgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTyxcclxuICBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSXHJcbiAgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUiBcclxuICBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCxcclxuICBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sXHJcbiAgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXHJcbiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRlxyXG4gIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXHJcbiAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTXHJcbiAgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbiovXHJcbi8qXHJcbkpQRUcgZW5jb2RlciBwb3J0ZWQgdG8gSmF2YVNjcmlwdCBhbmQgb3B0aW1pemVkIGJ5IEFuZHJlYXMgUml0dGVyLCB3d3cuYnl0ZXN0cm9tLmV1LCAxMS8yMDA5XHJcbkJhc2ljIEdVSSBibG9ja2luZyBqcGVnIGVuY29kZXJcclxuKi9cclxuXHJcbi8vIHZhciBidG9hID0gYnRvYSB8fCBmdW5jdGlvbiAoYnVmKSB7XHJcbi8vICAgICByZXR1cm4gQnVmZmVyLmZyb20oYnVmKS50b1N0cmluZygnYmFzZTY0Jyk7XHJcbi8vIH07XHJcblxyXG5mdW5jdGlvbiBKUEVHRW5jb2RlcihxdWFsaXR5KSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB2YXIgZnJvdW5kID0gTWF0aC5yb3VuZDtcclxuICAgIHZhciBmZmxvb3IgPSBNYXRoLmZsb29yO1xyXG4gICAgdmFyIFlUYWJsZSA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICB2YXIgVVZUYWJsZSA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICB2YXIgZmR0YmxfWSA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICB2YXIgZmR0YmxfVVYgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgdmFyIFlEQ19IVDtcclxuICAgIHZhciBVVkRDX0hUO1xyXG4gICAgdmFyIFlBQ19IVDtcclxuICAgIHZhciBVVkFDX0hUO1xyXG5cclxuICAgIHZhciBiaXRjb2RlID0gbmV3IEFycmF5KDY1NTM1KTtcclxuICAgIHZhciBjYXRlZ29yeSA9IG5ldyBBcnJheSg2NTUzNSk7XHJcbiAgICB2YXIgb3V0cHV0ZkRDVFF1YW50ID0gbmV3IEFycmF5KDY0KTtcclxuICAgIHZhciBEVSA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICB2YXIgYnl0ZW91dCA9IFtdO1xyXG4gICAgdmFyIGJ5dGVuZXcgPSAwO1xyXG4gICAgdmFyIGJ5dGVwb3MgPSA3O1xyXG5cclxuICAgIHZhciBZRFUgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgdmFyIFVEVSA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICB2YXIgVkRVID0gbmV3IEFycmF5KDY0KTtcclxuICAgIHZhciBjbHQgPSBuZXcgQXJyYXkoMjU2KTtcclxuICAgIHZhciBSR0JfWVVWX1RBQkxFID0gbmV3IEFycmF5KDIwNDgpO1xyXG4gICAgdmFyIGN1cnJlbnRRdWFsaXR5O1xyXG5cclxuICAgIHZhciBaaWdaYWcgPSBbXHJcbiAgICAgICAgMCwgMSwgNSwgNiwgMTQsIDE1LCAyNywgMjgsXHJcbiAgICAgICAgMiwgNCwgNywgMTMsIDE2LCAyNiwgMjksIDQyLFxyXG4gICAgICAgIDMsIDgsIDEyLCAxNywgMjUsIDMwLCA0MSwgNDMsXHJcbiAgICAgICAgOSwgMTEsIDE4LCAyNCwgMzEsIDQwLCA0NCwgNTMsXHJcbiAgICAgICAgMTAsIDE5LCAyMywgMzIsIDM5LCA0NSwgNTIsIDU0LFxyXG4gICAgICAgIDIwLCAyMiwgMzMsIDM4LCA0NiwgNTEsIDU1LCA2MCxcclxuICAgICAgICAyMSwgMzQsIDM3LCA0NywgNTAsIDU2LCA1OSwgNjEsXHJcbiAgICAgICAgMzUsIDM2LCA0OCwgNDksIDU3LCA1OCwgNjIsIDYzXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBzdGRfZGNfbHVtaW5hbmNlX25yY29kZXMgPSBbMCwgMCwgMSwgNSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgICB2YXIgc3RkX2RjX2x1bWluYW5jZV92YWx1ZXMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExXTtcclxuICAgIHZhciBzdGRfYWNfbHVtaW5hbmNlX25yY29kZXMgPSBbMCwgMCwgMiwgMSwgMywgMywgMiwgNCwgMywgNSwgNSwgNCwgNCwgMCwgMCwgMSwgMHg3ZF07XHJcbiAgICB2YXIgc3RkX2FjX2x1bWluYW5jZV92YWx1ZXMgPSBbXHJcbiAgICAgICAgMHgwMSwgMHgwMiwgMHgwMywgMHgwMCwgMHgwNCwgMHgxMSwgMHgwNSwgMHgxMixcclxuICAgICAgICAweDIxLCAweDMxLCAweDQxLCAweDA2LCAweDEzLCAweDUxLCAweDYxLCAweDA3LFxyXG4gICAgICAgIDB4MjIsIDB4NzEsIDB4MTQsIDB4MzIsIDB4ODEsIDB4OTEsIDB4YTEsIDB4MDgsXHJcbiAgICAgICAgMHgyMywgMHg0MiwgMHhiMSwgMHhjMSwgMHgxNSwgMHg1MiwgMHhkMSwgMHhmMCxcclxuICAgICAgICAweDI0LCAweDMzLCAweDYyLCAweDcyLCAweDgyLCAweDA5LCAweDBhLCAweDE2LFxyXG4gICAgICAgIDB4MTcsIDB4MTgsIDB4MTksIDB4MWEsIDB4MjUsIDB4MjYsIDB4MjcsIDB4MjgsXHJcbiAgICAgICAgMHgyOSwgMHgyYSwgMHgzNCwgMHgzNSwgMHgzNiwgMHgzNywgMHgzOCwgMHgzOSxcclxuICAgICAgICAweDNhLCAweDQzLCAweDQ0LCAweDQ1LCAweDQ2LCAweDQ3LCAweDQ4LCAweDQ5LFxyXG4gICAgICAgIDB4NGEsIDB4NTMsIDB4NTQsIDB4NTUsIDB4NTYsIDB4NTcsIDB4NTgsIDB4NTksXHJcbiAgICAgICAgMHg1YSwgMHg2MywgMHg2NCwgMHg2NSwgMHg2NiwgMHg2NywgMHg2OCwgMHg2OSxcclxuICAgICAgICAweDZhLCAweDczLCAweDc0LCAweDc1LCAweDc2LCAweDc3LCAweDc4LCAweDc5LFxyXG4gICAgICAgIDB4N2EsIDB4ODMsIDB4ODQsIDB4ODUsIDB4ODYsIDB4ODcsIDB4ODgsIDB4ODksXHJcbiAgICAgICAgMHg4YSwgMHg5MiwgMHg5MywgMHg5NCwgMHg5NSwgMHg5NiwgMHg5NywgMHg5OCxcclxuICAgICAgICAweDk5LCAweDlhLCAweGEyLCAweGEzLCAweGE0LCAweGE1LCAweGE2LCAweGE3LFxyXG4gICAgICAgIDB4YTgsIDB4YTksIDB4YWEsIDB4YjIsIDB4YjMsIDB4YjQsIDB4YjUsIDB4YjYsXHJcbiAgICAgICAgMHhiNywgMHhiOCwgMHhiOSwgMHhiYSwgMHhjMiwgMHhjMywgMHhjNCwgMHhjNSxcclxuICAgICAgICAweGM2LCAweGM3LCAweGM4LCAweGM5LCAweGNhLCAweGQyLCAweGQzLCAweGQ0LFxyXG4gICAgICAgIDB4ZDUsIDB4ZDYsIDB4ZDcsIDB4ZDgsIDB4ZDksIDB4ZGEsIDB4ZTEsIDB4ZTIsXHJcbiAgICAgICAgMHhlMywgMHhlNCwgMHhlNSwgMHhlNiwgMHhlNywgMHhlOCwgMHhlOSwgMHhlYSxcclxuICAgICAgICAweGYxLCAweGYyLCAweGYzLCAweGY0LCAweGY1LCAweGY2LCAweGY3LCAweGY4LFxyXG4gICAgICAgIDB4ZjksIDB4ZmFcclxuICAgIF07XHJcblxyXG4gICAgdmFyIHN0ZF9kY19jaHJvbWluYW5jZV9ucmNvZGVzID0gWzAsIDAsIDMsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDBdO1xyXG4gICAgdmFyIHN0ZF9kY19jaHJvbWluYW5jZV92YWx1ZXMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExXTtcclxuICAgIHZhciBzdGRfYWNfY2hyb21pbmFuY2VfbnJjb2RlcyA9IFswLCAwLCAyLCAxLCAyLCA0LCA0LCAzLCA0LCA3LCA1LCA0LCA0LCAwLCAxLCAyLCAweDc3XTtcclxuICAgIHZhciBzdGRfYWNfY2hyb21pbmFuY2VfdmFsdWVzID0gW1xyXG4gICAgICAgIDB4MDAsIDB4MDEsIDB4MDIsIDB4MDMsIDB4MTEsIDB4MDQsIDB4MDUsIDB4MjEsXHJcbiAgICAgICAgMHgzMSwgMHgwNiwgMHgxMiwgMHg0MSwgMHg1MSwgMHgwNywgMHg2MSwgMHg3MSxcclxuICAgICAgICAweDEzLCAweDIyLCAweDMyLCAweDgxLCAweDA4LCAweDE0LCAweDQyLCAweDkxLFxyXG4gICAgICAgIDB4YTEsIDB4YjEsIDB4YzEsIDB4MDksIDB4MjMsIDB4MzMsIDB4NTIsIDB4ZjAsXHJcbiAgICAgICAgMHgxNSwgMHg2MiwgMHg3MiwgMHhkMSwgMHgwYSwgMHgxNiwgMHgyNCwgMHgzNCxcclxuICAgICAgICAweGUxLCAweDI1LCAweGYxLCAweDE3LCAweDE4LCAweDE5LCAweDFhLCAweDI2LFxyXG4gICAgICAgIDB4MjcsIDB4MjgsIDB4MjksIDB4MmEsIDB4MzUsIDB4MzYsIDB4MzcsIDB4MzgsXHJcbiAgICAgICAgMHgzOSwgMHgzYSwgMHg0MywgMHg0NCwgMHg0NSwgMHg0NiwgMHg0NywgMHg0OCxcclxuICAgICAgICAweDQ5LCAweDRhLCAweDUzLCAweDU0LCAweDU1LCAweDU2LCAweDU3LCAweDU4LFxyXG4gICAgICAgIDB4NTksIDB4NWEsIDB4NjMsIDB4NjQsIDB4NjUsIDB4NjYsIDB4NjcsIDB4NjgsXHJcbiAgICAgICAgMHg2OSwgMHg2YSwgMHg3MywgMHg3NCwgMHg3NSwgMHg3NiwgMHg3NywgMHg3OCxcclxuICAgICAgICAweDc5LCAweDdhLCAweDgyLCAweDgzLCAweDg0LCAweDg1LCAweDg2LCAweDg3LFxyXG4gICAgICAgIDB4ODgsIDB4ODksIDB4OGEsIDB4OTIsIDB4OTMsIDB4OTQsIDB4OTUsIDB4OTYsXHJcbiAgICAgICAgMHg5NywgMHg5OCwgMHg5OSwgMHg5YSwgMHhhMiwgMHhhMywgMHhhNCwgMHhhNSxcclxuICAgICAgICAweGE2LCAweGE3LCAweGE4LCAweGE5LCAweGFhLCAweGIyLCAweGIzLCAweGI0LFxyXG4gICAgICAgIDB4YjUsIDB4YjYsIDB4YjcsIDB4YjgsIDB4YjksIDB4YmEsIDB4YzIsIDB4YzMsXHJcbiAgICAgICAgMHhjNCwgMHhjNSwgMHhjNiwgMHhjNywgMHhjOCwgMHhjOSwgMHhjYSwgMHhkMixcclxuICAgICAgICAweGQzLCAweGQ0LCAweGQ1LCAweGQ2LCAweGQ3LCAweGQ4LCAweGQ5LCAweGRhLFxyXG4gICAgICAgIDB4ZTIsIDB4ZTMsIDB4ZTQsIDB4ZTUsIDB4ZTYsIDB4ZTcsIDB4ZTgsIDB4ZTksXHJcbiAgICAgICAgMHhlYSwgMHhmMiwgMHhmMywgMHhmNCwgMHhmNSwgMHhmNiwgMHhmNywgMHhmOCxcclxuICAgICAgICAweGY5LCAweGZhXHJcbiAgICBdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRRdWFudFRhYmxlcyhzZikge1xyXG4gICAgICAgIHZhciBZUVQgPSBbXHJcbiAgICAgICAgICAgIDE2LCAxMSwgMTAsIDE2LCAyNCwgNDAsIDUxLCA2MSxcclxuICAgICAgICAgICAgMTIsIDEyLCAxNCwgMTksIDI2LCA1OCwgNjAsIDU1LFxyXG4gICAgICAgICAgICAxNCwgMTMsIDE2LCAyNCwgNDAsIDU3LCA2OSwgNTYsXHJcbiAgICAgICAgICAgIDE0LCAxNywgMjIsIDI5LCA1MSwgODcsIDgwLCA2MixcclxuICAgICAgICAgICAgMTgsIDIyLCAzNywgNTYsIDY4LCAxMDksIDEwMywgNzcsXHJcbiAgICAgICAgICAgIDI0LCAzNSwgNTUsIDY0LCA4MSwgMTA0LCAxMTMsIDkyLFxyXG4gICAgICAgICAgICA0OSwgNjQsIDc4LCA4NywgMTAzLCAxMjEsIDEyMCwgMTAxLFxyXG4gICAgICAgICAgICA3MiwgOTIsIDk1LCA5OCwgMTEyLCAxMDAsIDEwMywgOTlcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY0OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHQgPSBmZmxvb3IoKFlRVFtpXSAqIHNmICsgNTApIC8gMTAwKTtcclxuICAgICAgICAgICAgaWYgKHQgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0ID4gMjU1KSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gMjU1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFlUYWJsZVtaaWdaYWdbaV1dID0gdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIFVWUVQgPSBbXHJcbiAgICAgICAgICAgIDE3LCAxOCwgMjQsIDQ3LCA5OSwgOTksIDk5LCA5OSxcclxuICAgICAgICAgICAgMTgsIDIxLCAyNiwgNjYsIDk5LCA5OSwgOTksIDk5LFxyXG4gICAgICAgICAgICAyNCwgMjYsIDU2LCA5OSwgOTksIDk5LCA5OSwgOTksXHJcbiAgICAgICAgICAgIDQ3LCA2NiwgOTksIDk5LCA5OSwgOTksIDk5LCA5OSxcclxuICAgICAgICAgICAgOTksIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksIDk5LFxyXG4gICAgICAgICAgICA5OSwgOTksIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksXHJcbiAgICAgICAgICAgIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksIDk5LCA5OSxcclxuICAgICAgICAgICAgOTksIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksIDk5XHJcbiAgICAgICAgXTtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDY0OyBqKyspIHtcclxuICAgICAgICAgICAgdmFyIHUgPSBmZmxvb3IoKFVWUVRbal0gKiBzZiArIDUwKSAvIDEwMCk7XHJcbiAgICAgICAgICAgIGlmICh1IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgdSA9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodSA+IDI1NSkge1xyXG4gICAgICAgICAgICAgICAgdSA9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBVVlRhYmxlW1ppZ1phZ1tqXV0gPSB1O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYWFzZiA9IFtcclxuICAgICAgICAgICAgMS4wLCAxLjM4NzAzOTg0NSwgMS4zMDY1NjI5NjUsIDEuMTc1ODc1NjAyLFxyXG4gICAgICAgICAgICAxLjAsIDAuNzg1Njk0OTU4LCAwLjU0MTE5NjEwMCwgMC4yNzU4OTkzNzlcclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciBrID0gMDtcclxuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCA4OyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCA4OyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgZmR0YmxfWVtrXSA9ICgxLjAgLyAoWVRhYmxlW1ppZ1phZ1trXV0gKiBhYXNmW3Jvd10gKiBhYXNmW2NvbF0gKiA4LjApKTtcclxuICAgICAgICAgICAgICAgIGZkdGJsX1VWW2tdID0gKDEuMCAvIChVVlRhYmxlW1ppZ1phZ1trXV0gKiBhYXNmW3Jvd10gKiBhYXNmW2NvbF0gKiA4LjApKTtcclxuICAgICAgICAgICAgICAgIGsrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb21wdXRlSHVmZm1hblRibChucmNvZGVzLCBzdGRfdGFibGUpIHtcclxuICAgICAgICB2YXIgY29kZXZhbHVlID0gMDtcclxuICAgICAgICB2YXIgcG9zX2luX3RhYmxlID0gMDtcclxuICAgICAgICB2YXIgSFQgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBrID0gMTsgayA8PSAxNjsgaysrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDw9IG5yY29kZXNba107IGorKykge1xyXG4gICAgICAgICAgICAgICAgSFRbc3RkX3RhYmxlW3Bvc19pbl90YWJsZV1dID0gW107XHJcbiAgICAgICAgICAgICAgICBIVFtzdGRfdGFibGVbcG9zX2luX3RhYmxlXV1bMF0gPSBjb2RldmFsdWU7XHJcbiAgICAgICAgICAgICAgICBIVFtzdGRfdGFibGVbcG9zX2luX3RhYmxlXV1bMV0gPSBrO1xyXG4gICAgICAgICAgICAgICAgcG9zX2luX3RhYmxlKys7XHJcbiAgICAgICAgICAgICAgICBjb2RldmFsdWUrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb2RldmFsdWUgKj0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEhUO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRIdWZmbWFuVGJsKCkge1xyXG4gICAgICAgIFlEQ19IVCA9IGNvbXB1dGVIdWZmbWFuVGJsKHN0ZF9kY19sdW1pbmFuY2VfbnJjb2Rlcywgc3RkX2RjX2x1bWluYW5jZV92YWx1ZXMpO1xyXG4gICAgICAgIFVWRENfSFQgPSBjb21wdXRlSHVmZm1hblRibChzdGRfZGNfY2hyb21pbmFuY2VfbnJjb2Rlcywgc3RkX2RjX2Nocm9taW5hbmNlX3ZhbHVlcyk7XHJcbiAgICAgICAgWUFDX0hUID0gY29tcHV0ZUh1ZmZtYW5UYmwoc3RkX2FjX2x1bWluYW5jZV9ucmNvZGVzLCBzdGRfYWNfbHVtaW5hbmNlX3ZhbHVlcyk7XHJcbiAgICAgICAgVVZBQ19IVCA9IGNvbXB1dGVIdWZmbWFuVGJsKHN0ZF9hY19jaHJvbWluYW5jZV9ucmNvZGVzLCBzdGRfYWNfY2hyb21pbmFuY2VfdmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Q2F0ZWdvcnlOdW1iZXIoKSB7XHJcbiAgICAgICAgdmFyIG5ybG93ZXIgPSAxO1xyXG4gICAgICAgIHZhciBucnVwcGVyID0gMjtcclxuICAgICAgICBmb3IgKHZhciBjYXQgPSAxOyBjYXQgPD0gMTU7IGNhdCsrKSB7XHJcbiAgICAgICAgICAgIC8vUG9zaXRpdmUgbnVtYmVyc1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuciA9IG5ybG93ZXI7IG5yIDwgbnJ1cHBlcjsgbnIrKykge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlbMzI3NjcgKyBucl0gPSBjYXQ7XHJcbiAgICAgICAgICAgICAgICBiaXRjb2RlWzMyNzY3ICsgbnJdID0gW107XHJcbiAgICAgICAgICAgICAgICBiaXRjb2RlWzMyNzY3ICsgbnJdWzFdID0gY2F0O1xyXG4gICAgICAgICAgICAgICAgYml0Y29kZVszMjc2NyArIG5yXVswXSA9IG5yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vTmVnYXRpdmUgbnVtYmVyc1xyXG4gICAgICAgICAgICBmb3IgKHZhciBucm5lZyA9IC0obnJ1cHBlciAtIDEpOyBucm5lZyA8PSAtbnJsb3dlcjsgbnJuZWcrKykge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlbMzI3NjcgKyBucm5lZ10gPSBjYXQ7XHJcbiAgICAgICAgICAgICAgICBiaXRjb2RlWzMyNzY3ICsgbnJuZWddID0gW107XHJcbiAgICAgICAgICAgICAgICBiaXRjb2RlWzMyNzY3ICsgbnJuZWddWzFdID0gY2F0O1xyXG4gICAgICAgICAgICAgICAgYml0Y29kZVszMjc2NyArIG5ybmVnXVswXSA9IG5ydXBwZXIgLSAxICsgbnJuZWc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbnJsb3dlciA8PD0gMTtcclxuICAgICAgICAgICAgbnJ1cHBlciA8PD0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFJHQllVVlRhYmxlKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcclxuICAgICAgICAgICAgUkdCX1lVVl9UQUJMRVtpXSA9IDE5NTk1ICogaTtcclxuICAgICAgICAgICAgUkdCX1lVVl9UQUJMRVsoaSArIDI1NikgPj4gMF0gPSAzODQ3MCAqIGk7XHJcbiAgICAgICAgICAgIFJHQl9ZVVZfVEFCTEVbKGkgKyA1MTIpID4+IDBdID0gNzQ3MSAqIGkgKyAweDgwMDA7XHJcbiAgICAgICAgICAgIFJHQl9ZVVZfVEFCTEVbKGkgKyA3NjgpID4+IDBdID0gLTExMDU5ICogaTtcclxuICAgICAgICAgICAgUkdCX1lVVl9UQUJMRVsoaSArIDEwMjQpID4+IDBdID0gLTIxNzA5ICogaTtcclxuICAgICAgICAgICAgUkdCX1lVVl9UQUJMRVsoaSArIDEyODApID4+IDBdID0gMzI3NjggKiBpICsgMHg4MDdGRkY7XHJcbiAgICAgICAgICAgIFJHQl9ZVVZfVEFCTEVbKGkgKyAxNTM2KSA+PiAwXSA9IC0yNzQzOSAqIGk7XHJcbiAgICAgICAgICAgIFJHQl9ZVVZfVEFCTEVbKGkgKyAxNzkyKSA+PiAwXSA9IC0gNTMyOSAqIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIElPIGZ1bmN0aW9uc1xyXG4gICAgZnVuY3Rpb24gd3JpdGVCaXRzKGJzKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gYnNbMF07XHJcbiAgICAgICAgdmFyIHBvc3ZhbCA9IGJzWzFdIC0gMTtcclxuICAgICAgICB3aGlsZSAocG9zdmFsID49IDApIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICYgKDEgPDwgcG9zdmFsKSkge1xyXG4gICAgICAgICAgICAgICAgYnl0ZW5ldyB8PSAoMSA8PCBieXRlcG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3N2YWwtLTtcclxuICAgICAgICAgICAgYnl0ZXBvcy0tO1xyXG4gICAgICAgICAgICBpZiAoYnl0ZXBvcyA8IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChieXRlbmV3ID09IDB4RkYpIHtcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZUJ5dGUoMHhGRik7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVCeXRlKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVCeXRlKGJ5dGVuZXcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnl0ZXBvcyA9IDc7XHJcbiAgICAgICAgICAgICAgICBieXRlbmV3ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3cml0ZUJ5dGUodmFsdWUpIHtcclxuICAgICAgICAvL2J5dGVvdXQucHVzaChjbHRbdmFsdWVdKTsgLy8gd3JpdGUgY2hhciBkaXJlY3RseSBpbnN0ZWFkIG9mIGNvbnZlcnRpbmcgbGF0ZXJcclxuICAgICAgICBieXRlb3V0LnB1c2godmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdyaXRlV29yZCh2YWx1ZSkge1xyXG4gICAgICAgIHdyaXRlQnl0ZSgodmFsdWUgPj4gOCkgJiAweEZGKTtcclxuICAgICAgICB3cml0ZUJ5dGUoKHZhbHVlKSAmIDB4RkYpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERDVCAmIHF1YW50aXphdGlvbiBjb3JlXHJcbiAgICBmdW5jdGlvbiBmRENUUXVhbnQoZGF0YSwgZmR0YmwpIHtcclxuICAgICAgICB2YXIgZDAsIGQxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3O1xyXG4gICAgICAgIC8qIFBhc3MgMTogcHJvY2VzcyByb3dzLiAqL1xyXG4gICAgICAgIHZhciBkYXRhT2ZmID0gMDtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICB2YXIgSTggPSA4O1xyXG4gICAgICAgIHZhciBJNjQgPSA2NDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgSTg7ICsraSkge1xyXG4gICAgICAgICAgICBkMCA9IGRhdGFbZGF0YU9mZl07XHJcbiAgICAgICAgICAgIGQxID0gZGF0YVtkYXRhT2ZmICsgMV07XHJcbiAgICAgICAgICAgIGQyID0gZGF0YVtkYXRhT2ZmICsgMl07XHJcbiAgICAgICAgICAgIGQzID0gZGF0YVtkYXRhT2ZmICsgM107XHJcbiAgICAgICAgICAgIGQ0ID0gZGF0YVtkYXRhT2ZmICsgNF07XHJcbiAgICAgICAgICAgIGQ1ID0gZGF0YVtkYXRhT2ZmICsgNV07XHJcbiAgICAgICAgICAgIGQ2ID0gZGF0YVtkYXRhT2ZmICsgNl07XHJcbiAgICAgICAgICAgIGQ3ID0gZGF0YVtkYXRhT2ZmICsgN107XHJcblxyXG4gICAgICAgICAgICB2YXIgdG1wMCA9IGQwICsgZDc7XHJcbiAgICAgICAgICAgIHZhciB0bXA3ID0gZDAgLSBkNztcclxuICAgICAgICAgICAgdmFyIHRtcDEgPSBkMSArIGQ2O1xyXG4gICAgICAgICAgICB2YXIgdG1wNiA9IGQxIC0gZDY7XHJcbiAgICAgICAgICAgIHZhciB0bXAyID0gZDIgKyBkNTtcclxuICAgICAgICAgICAgdmFyIHRtcDUgPSBkMiAtIGQ1O1xyXG4gICAgICAgICAgICB2YXIgdG1wMyA9IGQzICsgZDQ7XHJcbiAgICAgICAgICAgIHZhciB0bXA0ID0gZDMgLSBkNDtcclxuXHJcbiAgICAgICAgICAgIC8qIEV2ZW4gcGFydCAqL1xyXG4gICAgICAgICAgICB2YXIgdG1wMTAgPSB0bXAwICsgdG1wMztcdC8qIHBoYXNlIDIgKi9cclxuICAgICAgICAgICAgdmFyIHRtcDEzID0gdG1wMCAtIHRtcDM7XHJcbiAgICAgICAgICAgIHZhciB0bXAxMSA9IHRtcDEgKyB0bXAyO1xyXG4gICAgICAgICAgICB2YXIgdG1wMTIgPSB0bXAxIC0gdG1wMjtcclxuXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZl0gPSB0bXAxMCArIHRtcDExOyAvKiBwaGFzZSAzICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDRdID0gdG1wMTAgLSB0bXAxMTtcclxuXHJcbiAgICAgICAgICAgIHZhciB6MSA9ICh0bXAxMiArIHRtcDEzKSAqIDAuNzA3MTA2NzgxOyAvKiBjNCAqL1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyAyXSA9IHRtcDEzICsgejE7IC8qIHBoYXNlIDUgKi9cclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgNl0gPSB0bXAxMyAtIHoxO1xyXG5cclxuICAgICAgICAgICAgLyogT2RkIHBhcnQgKi9cclxuICAgICAgICAgICAgdG1wMTAgPSB0bXA0ICsgdG1wNTsgLyogcGhhc2UgMiAqL1xyXG4gICAgICAgICAgICB0bXAxMSA9IHRtcDUgKyB0bXA2O1xyXG4gICAgICAgICAgICB0bXAxMiA9IHRtcDYgKyB0bXA3O1xyXG5cclxuICAgICAgICAgICAgLyogVGhlIHJvdGF0b3IgaXMgbW9kaWZpZWQgZnJvbSBmaWcgNC04IHRvIGF2b2lkIGV4dHJhIG5lZ2F0aW9ucy4gKi9cclxuICAgICAgICAgICAgdmFyIHo1ID0gKHRtcDEwIC0gdG1wMTIpICogMC4zODI2ODM0MzM7IC8qIGM2ICovXHJcbiAgICAgICAgICAgIHZhciB6MiA9IDAuNTQxMTk2MTAwICogdG1wMTAgKyB6NTsgLyogYzItYzYgKi9cclxuICAgICAgICAgICAgdmFyIHo0ID0gMS4zMDY1NjI5NjUgKiB0bXAxMiArIHo1OyAvKiBjMitjNiAqL1xyXG4gICAgICAgICAgICB2YXIgejMgPSB0bXAxMSAqIDAuNzA3MTA2NzgxOyAvKiBjNCAqL1xyXG5cclxuICAgICAgICAgICAgdmFyIHoxMSA9IHRtcDcgKyB6MztcdC8qIHBoYXNlIDUgKi9cclxuICAgICAgICAgICAgdmFyIHoxMyA9IHRtcDcgLSB6MztcclxuXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDVdID0gejEzICsgejI7XHQvKiBwaGFzZSA2ICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDNdID0gejEzIC0gejI7XHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDFdID0gejExICsgejQ7XHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDddID0gejExIC0gejQ7XHJcblxyXG4gICAgICAgICAgICBkYXRhT2ZmICs9IDg7IC8qIGFkdmFuY2UgcG9pbnRlciB0byBuZXh0IHJvdyAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogUGFzcyAyOiBwcm9jZXNzIGNvbHVtbnMuICovXHJcbiAgICAgICAgZGF0YU9mZiA9IDA7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IEk4OyArK2kpIHtcclxuICAgICAgICAgICAgZDAgPSBkYXRhW2RhdGFPZmZdO1xyXG4gICAgICAgICAgICBkMSA9IGRhdGFbZGF0YU9mZiArIDhdO1xyXG4gICAgICAgICAgICBkMiA9IGRhdGFbZGF0YU9mZiArIDE2XTtcclxuICAgICAgICAgICAgZDMgPSBkYXRhW2RhdGFPZmYgKyAyNF07XHJcbiAgICAgICAgICAgIGQ0ID0gZGF0YVtkYXRhT2ZmICsgMzJdO1xyXG4gICAgICAgICAgICBkNSA9IGRhdGFbZGF0YU9mZiArIDQwXTtcclxuICAgICAgICAgICAgZDYgPSBkYXRhW2RhdGFPZmYgKyA0OF07XHJcbiAgICAgICAgICAgIGQ3ID0gZGF0YVtkYXRhT2ZmICsgNTZdO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRtcDBwMiA9IGQwICsgZDc7XHJcbiAgICAgICAgICAgIHZhciB0bXA3cDIgPSBkMCAtIGQ3O1xyXG4gICAgICAgICAgICB2YXIgdG1wMXAyID0gZDEgKyBkNjtcclxuICAgICAgICAgICAgdmFyIHRtcDZwMiA9IGQxIC0gZDY7XHJcbiAgICAgICAgICAgIHZhciB0bXAycDIgPSBkMiArIGQ1O1xyXG4gICAgICAgICAgICB2YXIgdG1wNXAyID0gZDIgLSBkNTtcclxuICAgICAgICAgICAgdmFyIHRtcDNwMiA9IGQzICsgZDQ7XHJcbiAgICAgICAgICAgIHZhciB0bXA0cDIgPSBkMyAtIGQ0O1xyXG5cclxuICAgICAgICAgICAgLyogRXZlbiBwYXJ0ICovXHJcbiAgICAgICAgICAgIHZhciB0bXAxMHAyID0gdG1wMHAyICsgdG1wM3AyO1x0LyogcGhhc2UgMiAqL1xyXG4gICAgICAgICAgICB2YXIgdG1wMTNwMiA9IHRtcDBwMiAtIHRtcDNwMjtcclxuICAgICAgICAgICAgdmFyIHRtcDExcDIgPSB0bXAxcDIgKyB0bXAycDI7XHJcbiAgICAgICAgICAgIHZhciB0bXAxMnAyID0gdG1wMXAyIC0gdG1wMnAyO1xyXG5cclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmXSA9IHRtcDEwcDIgKyB0bXAxMXAyOyAvKiBwaGFzZSAzICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDMyXSA9IHRtcDEwcDIgLSB0bXAxMXAyO1xyXG5cclxuICAgICAgICAgICAgdmFyIHoxcDIgPSAodG1wMTJwMiArIHRtcDEzcDIpICogMC43MDcxMDY3ODE7IC8qIGM0ICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDE2XSA9IHRtcDEzcDIgKyB6MXAyOyAvKiBwaGFzZSA1ICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDQ4XSA9IHRtcDEzcDIgLSB6MXAyO1xyXG5cclxuICAgICAgICAgICAgLyogT2RkIHBhcnQgKi9cclxuICAgICAgICAgICAgdG1wMTBwMiA9IHRtcDRwMiArIHRtcDVwMjsgLyogcGhhc2UgMiAqL1xyXG4gICAgICAgICAgICB0bXAxMXAyID0gdG1wNXAyICsgdG1wNnAyO1xyXG4gICAgICAgICAgICB0bXAxMnAyID0gdG1wNnAyICsgdG1wN3AyO1xyXG5cclxuICAgICAgICAgICAgLyogVGhlIHJvdGF0b3IgaXMgbW9kaWZpZWQgZnJvbSBmaWcgNC04IHRvIGF2b2lkIGV4dHJhIG5lZ2F0aW9ucy4gKi9cclxuICAgICAgICAgICAgdmFyIHo1cDIgPSAodG1wMTBwMiAtIHRtcDEycDIpICogMC4zODI2ODM0MzM7IC8qIGM2ICovXHJcbiAgICAgICAgICAgIHZhciB6MnAyID0gMC41NDExOTYxMDAgKiB0bXAxMHAyICsgejVwMjsgLyogYzItYzYgKi9cclxuICAgICAgICAgICAgdmFyIHo0cDIgPSAxLjMwNjU2Mjk2NSAqIHRtcDEycDIgKyB6NXAyOyAvKiBjMitjNiAqL1xyXG4gICAgICAgICAgICB2YXIgejNwMiA9IHRtcDExcDIgKiAwLjcwNzEwNjc4MTsgLyogYzQgKi9cclxuXHJcbiAgICAgICAgICAgIHZhciB6MTFwMiA9IHRtcDdwMiArIHozcDI7XHQvKiBwaGFzZSA1ICovXHJcbiAgICAgICAgICAgIHZhciB6MTNwMiA9IHRtcDdwMiAtIHozcDI7XHJcblxyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyA0MF0gPSB6MTNwMiArIHoycDI7IC8qIHBoYXNlIDYgKi9cclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgMjRdID0gejEzcDIgLSB6MnAyO1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyA4XSA9IHoxMXAyICsgejRwMjtcclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgNTZdID0gejExcDIgLSB6NHAyO1xyXG5cclxuICAgICAgICAgICAgZGF0YU9mZisrOyAvKiBhZHZhbmNlIHBvaW50ZXIgdG8gbmV4dCBjb2x1bW4gKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFF1YW50aXplL2Rlc2NhbGUgdGhlIGNvZWZmaWNpZW50c1xyXG4gICAgICAgIHZhciBmRENUUXVhbnQ7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IEk2NDsgKytpKSB7XHJcbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBxdWFudGl6YXRpb24gYW5kIHNjYWxpbmcgZmFjdG9yICYgUm91bmQgdG8gbmVhcmVzdCBpbnRlZ2VyXHJcbiAgICAgICAgICAgIGZEQ1RRdWFudCA9IGRhdGFbaV0gKiBmZHRibFtpXTtcclxuICAgICAgICAgICAgb3V0cHV0ZkRDVFF1YW50W2ldID0gKGZEQ1RRdWFudCA+IDAuMCkgPyAoKGZEQ1RRdWFudCArIDAuNSkgfCAwKSA6ICgoZkRDVFF1YW50IC0gMC41KSB8IDApO1xyXG4gICAgICAgICAgICAvL291dHB1dGZEQ1RRdWFudFtpXSA9IGZyb3VuZChmRENUUXVhbnQpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dGZEQ1RRdWFudDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3cml0ZUFQUDAoKSB7XHJcbiAgICAgICAgd3JpdGVXb3JkKDB4RkZFMCk7IC8vIG1hcmtlclxyXG4gICAgICAgIHdyaXRlV29yZCgxNik7IC8vIGxlbmd0aFxyXG4gICAgICAgIHdyaXRlQnl0ZSgweDRBKTsgLy8gSlxyXG4gICAgICAgIHdyaXRlQnl0ZSgweDQ2KTsgLy8gRlxyXG4gICAgICAgIHdyaXRlQnl0ZSgweDQ5KTsgLy8gSVxyXG4gICAgICAgIHdyaXRlQnl0ZSgweDQ2KTsgLy8gRlxyXG4gICAgICAgIHdyaXRlQnl0ZSgwKTsgLy8gPSBcIkpGSUZcIiwnXFwwJ1xyXG4gICAgICAgIHdyaXRlQnl0ZSgxKTsgLy8gdmVyc2lvbmhpXHJcbiAgICAgICAgd3JpdGVCeXRlKDEpOyAvLyB2ZXJzaW9ubG9cclxuICAgICAgICB3cml0ZUJ5dGUoMCk7IC8vIHh5dW5pdHNcclxuICAgICAgICB3cml0ZVdvcmQoMSk7IC8vIHhkZW5zaXR5XHJcbiAgICAgICAgd3JpdGVXb3JkKDEpOyAvLyB5ZGVuc2l0eVxyXG4gICAgICAgIHdyaXRlQnl0ZSgwKTsgLy8gdGh1bWJud2lkdGhcclxuICAgICAgICB3cml0ZUJ5dGUoMCk7IC8vIHRodW1ibmhlaWdodFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdyaXRlQVBQMShleGlmQnVmZmVyKSB7XHJcbiAgICAgICAgaWYgKCFleGlmQnVmZmVyKSByZXR1cm47XHJcblxyXG4gICAgICAgIHdyaXRlV29yZCgweEZGRTEpOyAvLyBBUFAxIG1hcmtlclxyXG5cclxuICAgICAgICBpZiAoZXhpZkJ1ZmZlclswXSA9PT0gMHg0NSAmJlxyXG4gICAgICAgICAgICBleGlmQnVmZmVyWzFdID09PSAweDc4ICYmXHJcbiAgICAgICAgICAgIGV4aWZCdWZmZXJbMl0gPT09IDB4NjkgJiZcclxuICAgICAgICAgICAgZXhpZkJ1ZmZlclszXSA9PT0gMHg2Nikge1xyXG4gICAgICAgICAgICAvLyBCdWZmZXIgYWxyZWFkeSBzdGFydHMgd2l0aCBFWElGLCBqdXN0IHVzZSBpdCBkaXJlY3RseVxyXG4gICAgICAgICAgICB3cml0ZVdvcmQoZXhpZkJ1ZmZlci5sZW5ndGggKyAyKTsgLy8gbGVuZ3RoIGlzIGJ1ZmZlciArIGxlbmd0aCBpdHNlbGYhXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQnVmZmVyIGRvZXNuJ3Qgc3RhcnQgd2l0aCBFWElGLCB3cml0ZSBpdCBmb3IgdGhlbVxyXG4gICAgICAgICAgICB3cml0ZVdvcmQoZXhpZkJ1ZmZlci5sZW5ndGggKyA1ICsgMik7IC8vIGxlbmd0aCBpcyBidWZmZXIgKyBFWElGXFwwICsgbGVuZ3RoIGl0c2VsZiFcclxuICAgICAgICAgICAgd3JpdGVCeXRlKDB4NDUpOyAvLyBFXHJcbiAgICAgICAgICAgIHdyaXRlQnl0ZSgweDc4KTsgLy8gWFxyXG4gICAgICAgICAgICB3cml0ZUJ5dGUoMHg2OSk7IC8vIElcclxuICAgICAgICAgICAgd3JpdGVCeXRlKDB4NjYpOyAvLyBGXHJcbiAgICAgICAgICAgIHdyaXRlQnl0ZSgwKTsgLy8gPSBcIkVYSUZcIiwnXFwwJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGlmQnVmZmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHdyaXRlQnl0ZShleGlmQnVmZmVyW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd3JpdGVTT0YwKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB3cml0ZVdvcmQoMHhGRkMwKTsgLy8gbWFya2VyXHJcbiAgICAgICAgd3JpdGVXb3JkKDE3KTsgICAvLyBsZW5ndGgsIHRydWVjb2xvciBZVVYgSlBHXHJcbiAgICAgICAgd3JpdGVCeXRlKDgpOyAgICAvLyBwcmVjaXNpb25cclxuICAgICAgICB3cml0ZVdvcmQoaGVpZ2h0KTtcclxuICAgICAgICB3cml0ZVdvcmQod2lkdGgpO1xyXG4gICAgICAgIHdyaXRlQnl0ZSgzKTsgICAgLy8gbnJvZmNvbXBvbmVudHNcclxuICAgICAgICB3cml0ZUJ5dGUoMSk7ICAgIC8vIElkWVxyXG4gICAgICAgIHdyaXRlQnl0ZSgweDExKTsgLy8gSFZZXHJcbiAgICAgICAgd3JpdGVCeXRlKDApOyAgICAvLyBRVFlcclxuICAgICAgICB3cml0ZUJ5dGUoMik7ICAgIC8vIElkVVxyXG4gICAgICAgIHdyaXRlQnl0ZSgweDExKTsgLy8gSFZVXHJcbiAgICAgICAgd3JpdGVCeXRlKDEpOyAgICAvLyBRVFVcclxuICAgICAgICB3cml0ZUJ5dGUoMyk7ICAgIC8vIElkVlxyXG4gICAgICAgIHdyaXRlQnl0ZSgweDExKTsgLy8gSFZWXHJcbiAgICAgICAgd3JpdGVCeXRlKDEpOyAgICAvLyBRVFZcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3cml0ZURRVCgpIHtcclxuICAgICAgICB3cml0ZVdvcmQoMHhGRkRCKTsgLy8gbWFya2VyXHJcbiAgICAgICAgd3JpdGVXb3JkKDEzMik7XHQgICAvLyBsZW5ndGhcclxuICAgICAgICB3cml0ZUJ5dGUoMCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2NDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHdyaXRlQnl0ZShZVGFibGVbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3cml0ZUJ5dGUoMSk7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA2NDsgaisrKSB7XHJcbiAgICAgICAgICAgIHdyaXRlQnl0ZShVVlRhYmxlW2pdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd3JpdGVESFQoKSB7XHJcbiAgICAgICAgd3JpdGVXb3JkKDB4RkZDNCk7IC8vIG1hcmtlclxyXG4gICAgICAgIHdyaXRlV29yZCgweDAxQTIpOyAvLyBsZW5ndGhcclxuXHJcbiAgICAgICAgd3JpdGVCeXRlKDApOyAvLyBIVFlEQ2luZm9cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgICAgICAgd3JpdGVCeXRlKHN0ZF9kY19sdW1pbmFuY2VfbnJjb2Rlc1tpICsgMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8PSAxMTsgaisrKSB7XHJcbiAgICAgICAgICAgIHdyaXRlQnl0ZShzdGRfZGNfbHVtaW5hbmNlX3ZhbHVlc1tqXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3cml0ZUJ5dGUoMHgxMCk7IC8vIEhUWUFDaW5mb1xyXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgMTY7IGsrKykge1xyXG4gICAgICAgICAgICB3cml0ZUJ5dGUoc3RkX2FjX2x1bWluYW5jZV9ucmNvZGVzW2sgKyAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGwgPSAwOyBsIDw9IDE2MTsgbCsrKSB7XHJcbiAgICAgICAgICAgIHdyaXRlQnl0ZShzdGRfYWNfbHVtaW5hbmNlX3ZhbHVlc1tsXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3cml0ZUJ5dGUoMSk7IC8vIEhUVURDaW5mb1xyXG4gICAgICAgIGZvciAodmFyIG0gPSAwOyBtIDwgMTY7IG0rKykge1xyXG4gICAgICAgICAgICB3cml0ZUJ5dGUoc3RkX2RjX2Nocm9taW5hbmNlX25yY29kZXNbbSArIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPD0gMTE7IG4rKykge1xyXG4gICAgICAgICAgICB3cml0ZUJ5dGUoc3RkX2RjX2Nocm9taW5hbmNlX3ZhbHVlc1tuXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3cml0ZUJ5dGUoMHgxMSk7IC8vIEhUVUFDaW5mb1xyXG4gICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgMTY7IG8rKykge1xyXG4gICAgICAgICAgICB3cml0ZUJ5dGUoc3RkX2FjX2Nocm9taW5hbmNlX25yY29kZXNbbyArIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPD0gMTYxOyBwKyspIHtcclxuICAgICAgICAgICAgd3JpdGVCeXRlKHN0ZF9hY19jaHJvbWluYW5jZV92YWx1ZXNbcF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3cml0ZUNPTShjb21tZW50cykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY29tbWVudHMgPT09IFwidW5kZWZpbmVkXCIgfHwgY29tbWVudHMuY29uc3RydWN0b3IgIT09IEFycmF5KSByZXR1cm47XHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlICE9PSBcInN0cmluZ1wiKSByZXR1cm47XHJcbiAgICAgICAgICAgIHdyaXRlV29yZCgweEZGRkUpOyAvLyBtYXJrZXJcclxuICAgICAgICAgICAgdmFyIGwgPSBlLmxlbmd0aDtcclxuICAgICAgICAgICAgd3JpdGVXb3JkKGwgKyAyKTsgLy8gbGVuZ3RoIGl0c2VsZiBhcyB3ZWxsXHJcbiAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgd3JpdGVCeXRlKGUuY2hhckNvZGVBdChpKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd3JpdGVTT1MoKSB7XHJcbiAgICAgICAgd3JpdGVXb3JkKDB4RkZEQSk7IC8vIG1hcmtlclxyXG4gICAgICAgIHdyaXRlV29yZCgxMik7IC8vIGxlbmd0aFxyXG4gICAgICAgIHdyaXRlQnl0ZSgzKTsgLy8gbnJvZmNvbXBvbmVudHNcclxuICAgICAgICB3cml0ZUJ5dGUoMSk7IC8vIElkWVxyXG4gICAgICAgIHdyaXRlQnl0ZSgwKTsgLy8gSFRZXHJcbiAgICAgICAgd3JpdGVCeXRlKDIpOyAvLyBJZFVcclxuICAgICAgICB3cml0ZUJ5dGUoMHgxMSk7IC8vIEhUVVxyXG4gICAgICAgIHdyaXRlQnl0ZSgzKTsgLy8gSWRWXHJcbiAgICAgICAgd3JpdGVCeXRlKDB4MTEpOyAvLyBIVFZcclxuICAgICAgICB3cml0ZUJ5dGUoMCk7IC8vIFNzXHJcbiAgICAgICAgd3JpdGVCeXRlKDB4M2YpOyAvLyBTZVxyXG4gICAgICAgIHdyaXRlQnl0ZSgwKTsgLy8gQmZcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzRFUoQ0RVLCBmZHRibCwgREMsIEhUREMsIEhUQUMpIHtcclxuICAgICAgICB2YXIgRU9CID0gSFRBQ1sweDAwXTtcclxuICAgICAgICB2YXIgTTE2emVyb2VzID0gSFRBQ1sweEYwXTtcclxuICAgICAgICB2YXIgcG9zO1xyXG4gICAgICAgIHZhciBJMTYgPSAxNjtcclxuICAgICAgICB2YXIgSTYzID0gNjM7XHJcbiAgICAgICAgdmFyIEk2NCA9IDY0O1xyXG4gICAgICAgIHZhciBEVV9EQ1QgPSBmRENUUXVhbnQoQ0RVLCBmZHRibCk7XHJcbiAgICAgICAgLy9aaWdaYWcgcmVvcmRlclxyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgSTY0OyArK2opIHtcclxuICAgICAgICAgICAgRFVbWmlnWmFnW2pdXSA9IERVX0RDVFtqXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIERpZmYgPSBEVVswXSAtIERDOyBEQyA9IERVWzBdO1xyXG4gICAgICAgIC8vRW5jb2RlIERDXHJcbiAgICAgICAgaWYgKERpZmYgPT0gMCkge1xyXG4gICAgICAgICAgICB3cml0ZUJpdHMoSFREQ1swXSk7IC8vIERpZmYgbWlnaHQgYmUgMFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBvcyA9IDMyNzY3ICsgRGlmZjtcclxuICAgICAgICAgICAgd3JpdGVCaXRzKEhURENbY2F0ZWdvcnlbcG9zXV0pO1xyXG4gICAgICAgICAgICB3cml0ZUJpdHMoYml0Y29kZVtwb3NdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9FbmNvZGUgQUNzXHJcbiAgICAgICAgdmFyIGVuZDBwb3MgPSA2MzsgLy8gd2FzIGNvbnN0Li4uIHdoaWNoIGlzIGNyYXp5XHJcbiAgICAgICAgZm9yICg7IChlbmQwcG9zID4gMCkgJiYgKERVW2VuZDBwb3NdID09IDApOyBlbmQwcG9zLS0pIHsgfTtcclxuICAgICAgICAvL2VuZDBwb3MgPSBmaXJzdCBlbGVtZW50IGluIHJldmVyc2Ugb3JkZXIgIT0wXHJcbiAgICAgICAgaWYgKGVuZDBwb3MgPT0gMCkge1xyXG4gICAgICAgICAgICB3cml0ZUJpdHMoRU9CKTtcclxuICAgICAgICAgICAgcmV0dXJuIERDO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaSA9IDE7XHJcbiAgICAgICAgdmFyIGxuZztcclxuICAgICAgICB3aGlsZSAoaSA8PSBlbmQwcG9zKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydHBvcyA9IGk7XHJcbiAgICAgICAgICAgIGZvciAoOyAoRFVbaV0gPT0gMCkgJiYgKGkgPD0gZW5kMHBvcyk7ICsraSkgeyB9XHJcbiAgICAgICAgICAgIHZhciBucnplcm9lcyA9IGkgLSBzdGFydHBvcztcclxuICAgICAgICAgICAgaWYgKG5yemVyb2VzID49IEkxNikge1xyXG4gICAgICAgICAgICAgICAgbG5nID0gbnJ6ZXJvZXMgPj4gNDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG5ybWFya2VyID0gMTsgbnJtYXJrZXIgPD0gbG5nOyArK25ybWFya2VyKVxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlQml0cyhNMTZ6ZXJvZXMpO1xyXG4gICAgICAgICAgICAgICAgbnJ6ZXJvZXMgPSBucnplcm9lcyAmIDB4RjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3MgPSAzMjc2NyArIERVW2ldO1xyXG4gICAgICAgICAgICB3cml0ZUJpdHMoSFRBQ1sobnJ6ZXJvZXMgPDwgNCkgKyBjYXRlZ29yeVtwb3NdXSk7XHJcbiAgICAgICAgICAgIHdyaXRlQml0cyhiaXRjb2RlW3Bvc10pO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbmQwcG9zICE9IEk2Mykge1xyXG4gICAgICAgICAgICB3cml0ZUJpdHMoRU9CKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIERDO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRDaGFyTG9va3VwVGFibGUoKSB7XHJcbiAgICAgICAgdmFyIHNmY2MgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHsgLy8vLy8gQUNIVFVORyAvLyAyNTVcclxuICAgICAgICAgICAgY2x0W2ldID0gc2ZjYyhpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbmNvZGUgPSBmdW5jdGlvbiAoaW1hZ2UsIHF1YWxpdHkpIC8vIGltYWdlIGRhdGEgb2JqZWN0XHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHRpbWVfc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgaWYgKHF1YWxpdHkpIHNldFF1YWxpdHkocXVhbGl0eSk7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgYml0IHdyaXRlclxyXG4gICAgICAgIGJ5dGVvdXQgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBieXRlbmV3ID0gMDtcclxuICAgICAgICBieXRlcG9zID0gNztcclxuXHJcbiAgICAgICAgLy8gQWRkIEpQRUcgaGVhZGVyc1xyXG4gICAgICAgIHdyaXRlV29yZCgweEZGRDgpOyAvLyBTT0lcclxuICAgICAgICB3cml0ZUFQUDAoKTtcclxuICAgICAgICB3cml0ZUNPTShpbWFnZS5jb21tZW50cyk7XHJcbiAgICAgICAgd3JpdGVBUFAxKGltYWdlLmV4aWZCdWZmZXIpO1xyXG4gICAgICAgIHdyaXRlRFFUKCk7XHJcbiAgICAgICAgd3JpdGVTT0YwKGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG4gICAgICAgIHdyaXRlREhUKCk7XHJcbiAgICAgICAgd3JpdGVTT1MoKTtcclxuXHJcblxyXG4gICAgICAgIC8vIEVuY29kZSA4eDggbWFjcm9ibG9ja3NcclxuICAgICAgICB2YXIgRENZID0gMDtcclxuICAgICAgICB2YXIgRENVID0gMDtcclxuICAgICAgICB2YXIgRENWID0gMDtcclxuXHJcbiAgICAgICAgYnl0ZW5ldyA9IDA7XHJcbiAgICAgICAgYnl0ZXBvcyA9IDc7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmVuY29kZS5kaXNwbGF5TmFtZSA9IFwiX2VuY29kZV9cIjtcclxuXHJcbiAgICAgICAgdmFyIGltYWdlRGF0YSA9IGltYWdlLmRhdGE7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IGltYWdlLmhlaWdodDtcclxuXHJcbiAgICAgICAgdmFyIHF1YWRXaWR0aCA9IHdpZHRoICogNDtcclxuICAgICAgICB2YXIgdHJpcGxlV2lkdGggPSB3aWR0aCAqIDM7XHJcblxyXG4gICAgICAgIHZhciB4LCB5ID0gMDtcclxuICAgICAgICB2YXIgciwgZywgYjtcclxuICAgICAgICB2YXIgc3RhcnQsIHAsIGNvbCwgcm93LCBwb3M7XHJcbiAgICAgICAgd2hpbGUgKHkgPCBoZWlnaHQpIHtcclxuICAgICAgICAgICAgeCA9IDA7XHJcbiAgICAgICAgICAgIHdoaWxlICh4IDwgcXVhZFdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IHF1YWRXaWR0aCAqIHkgKyB4O1xyXG4gICAgICAgICAgICAgICAgcCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgY29sID0gLTE7XHJcbiAgICAgICAgICAgICAgICByb3cgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAocG9zID0gMDsgcG9zIDwgNjQ7IHBvcysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gcG9zID4+IDM7Ly8gLzhcclxuICAgICAgICAgICAgICAgICAgICBjb2wgPSAocG9zICYgNykgKiA0OyAvLyAlOFxyXG4gICAgICAgICAgICAgICAgICAgIHAgPSBzdGFydCArIChyb3cgKiBxdWFkV2lkdGgpICsgY29sO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoeSArIHJvdyA+PSBoZWlnaHQpIHsgLy8gcGFkZGluZyBib3R0b21cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCAtPSAocXVhZFdpZHRoICogKHkgKyAxICsgcm93IC0gaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCArIGNvbCA+PSBxdWFkV2lkdGgpIHsgLy8gcGFkZGluZyByaWdodFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgLT0gKCh4ICsgY29sKSAtIHF1YWRXaWR0aCArIDQpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByID0gaW1hZ2VEYXRhW3ArK107XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IGltYWdlRGF0YVtwKytdO1xyXG4gICAgICAgICAgICAgICAgICAgIGIgPSBpbWFnZURhdGFbcCsrXTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIC8vIGNhbGN1bGF0ZSBZVVYgdmFsdWVzIGR5bmFtaWNhbGx5XHJcbiAgICAgICAgICAgICAgICAgICAgWURVW3Bvc109KCgoIDAuMjk5MDApKnIrKCAwLjU4NzAwKSpnKyggMC4xMTQwMCkqYikpLTEyODsgLy8tMHg4MFxyXG4gICAgICAgICAgICAgICAgICAgIFVEVVtwb3NdPSgoKC0wLjE2ODc0KSpyKygtMC4zMzEyNikqZysoIDAuNTAwMDApKmIpKTtcclxuICAgICAgICAgICAgICAgICAgICBWRFVbcG9zXT0oKCggMC41MDAwMCkqcisoLTAuNDE4NjkpKmcrKC0wLjA4MTMxKSpiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlIGxvb2t1cCB0YWJsZSAoc2xpZ2h0bHkgZmFzdGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIFlEVVtwb3NdID0gKChSR0JfWVVWX1RBQkxFW3JdICsgUkdCX1lVVl9UQUJMRVsoZyArIDI1NikgPj4gMF0gKyBSR0JfWVVWX1RBQkxFWyhiICsgNTEyKSA+PiAwXSkgPj4gMTYpIC0gMTI4O1xyXG4gICAgICAgICAgICAgICAgICAgIFVEVVtwb3NdID0gKChSR0JfWVVWX1RBQkxFWyhyICsgNzY4KSA+PiAwXSArIFJHQl9ZVVZfVEFCTEVbKGcgKyAxMDI0KSA+PiAwXSArIFJHQl9ZVVZfVEFCTEVbKGIgKyAxMjgwKSA+PiAwXSkgPj4gMTYpIC0gMTI4O1xyXG4gICAgICAgICAgICAgICAgICAgIFZEVVtwb3NdID0gKChSR0JfWVVWX1RBQkxFWyhyICsgMTI4MCkgPj4gMF0gKyBSR0JfWVVWX1RBQkxFWyhnICsgMTUzNikgPj4gMF0gKyBSR0JfWVVWX1RBQkxFWyhiICsgMTc5MikgPj4gMF0pID4+IDE2KSAtIDEyODtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgRENZID0gcHJvY2Vzc0RVKFlEVSwgZmR0YmxfWSwgRENZLCBZRENfSFQsIFlBQ19IVCk7XHJcbiAgICAgICAgICAgICAgICBEQ1UgPSBwcm9jZXNzRFUoVURVLCBmZHRibF9VViwgRENVLCBVVkRDX0hULCBVVkFDX0hUKTtcclxuICAgICAgICAgICAgICAgIERDViA9IHByb2Nlc3NEVShWRFUsIGZkdGJsX1VWLCBEQ1YsIFVWRENfSFQsIFVWQUNfSFQpO1xyXG4gICAgICAgICAgICAgICAgeCArPSAzMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB5ICs9IDg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAvLyBEbyB0aGUgYml0IGFsaWdubWVudCBvZiB0aGUgRU9JIG1hcmtlclxyXG4gICAgICAgIGlmIChieXRlcG9zID49IDApIHtcclxuICAgICAgICAgICAgdmFyIGZpbGxiaXRzID0gW107XHJcbiAgICAgICAgICAgIGZpbGxiaXRzWzFdID0gYnl0ZXBvcyArIDE7XHJcbiAgICAgICAgICAgIGZpbGxiaXRzWzBdID0gKDEgPDwgKGJ5dGVwb3MgKyAxKSkgLSAxO1xyXG4gICAgICAgICAgICB3cml0ZUJpdHMoZmlsbGJpdHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd3JpdGVXb3JkKDB4RkZEOSk7IC8vRU9JXHJcblxyXG4gICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ5dGVvdXQpO1xyXG4gICAgICBcclxuICAgICAgICB2YXIganBlZ0RhdGFVcmkgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwnICsgYnRvYShieXRlb3V0LmpvaW4oJycpKTtcclxuXHJcbiAgICAgICAgYnl0ZW91dCA9IFtdO1xyXG5cclxuICAgICAgICAvLyBiZW5jaG1hcmtpbmdcclxuICAgICAgICB2YXIgZHVyYXRpb24gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRpbWVfc3RhcnQ7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnRW5jb2RpbmcgdGltZTogJysgZHVyYXRpb24gKyAnbXMnKTtcclxuICAgICAgICAvL1xyXG5cclxuICAgICAgICByZXR1cm4ganBlZ0RhdGFVcmlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRRdWFsaXR5KHF1YWxpdHkpIHtcclxuICAgICAgICBpZiAocXVhbGl0eSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHF1YWxpdHkgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocXVhbGl0eSA+IDEwMCkge1xyXG4gICAgICAgICAgICBxdWFsaXR5ID0gMTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRRdWFsaXR5ID09IHF1YWxpdHkpIHJldHVybiAvLyBkb24ndCByZWNhbGMgaWYgdW5jaGFuZ2VkXHJcblxyXG4gICAgICAgIHZhciBzZiA9IDA7XHJcbiAgICAgICAgaWYgKHF1YWxpdHkgPCA1MCkge1xyXG4gICAgICAgICAgICBzZiA9IE1hdGguZmxvb3IoNTAwMCAvIHF1YWxpdHkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNmID0gTWF0aC5mbG9vcigyMDAgLSBxdWFsaXR5ICogMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbml0UXVhbnRUYWJsZXMoc2YpO1xyXG4gICAgICAgIGN1cnJlbnRRdWFsaXR5ID0gcXVhbGl0eTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdRdWFsaXR5IHNldCB0bzogJytxdWFsaXR5ICsnJScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgdmFyIHRpbWVfc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBpZiAoIXF1YWxpdHkpIHF1YWxpdHkgPSA1MDtcclxuICAgICAgICAvLyBDcmVhdGUgdGFibGVzXHJcbiAgICAgICAgaW5pdENoYXJMb29rdXBUYWJsZSgpXHJcbiAgICAgICAgaW5pdEh1ZmZtYW5UYmwoKTtcclxuICAgICAgICBpbml0Q2F0ZWdvcnlOdW1iZXIoKTtcclxuICAgICAgICBpbml0UkdCWVVWVGFibGUoKTtcclxuXHJcbiAgICAgICAgc2V0UXVhbGl0eShxdWFsaXR5KTtcclxuICAgICAgICB2YXIgZHVyYXRpb24gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRpbWVfc3RhcnQ7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnSW5pdGlhbGl6YXRpb24gJysgZHVyYXRpb24gKyAnbXMnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCk7XHJcblxyXG59O1xyXG5cclxuIFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUpQRyhpbWdEYXRhLCBxdSkge1xyXG4gICAgaWYgKHR5cGVvZiBxdSA9PT0gJ3VuZGVmaW5lZCcpIHF1ID0gNTA7XHJcbiAgICB2YXIgZW5jb2RlciA9IG5ldyBKUEVHRW5jb2RlcihxdSk7XHJcbiAgICB2YXIgZGF0YSA9IGVuY29kZXIuZW5jb2RlKGltZ0RhdGEsIHF1KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICB3aWR0aDogaW1nRGF0YS53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGltZ0RhdGEuaGVpZ2h0LFxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gaGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgaW1hZ2VEYXRhIG9mIGFuIGV4aXN0aW5nIGltYWdlIG9uIHRoZSBjdXJyZW50IHBhZ2UuXHJcbmZ1bmN0aW9uIGdldEltYWdlRGF0YUZyb21JbWFnZShpZE9yRWxlbWVudCkge1xyXG4gICAgdmFyIHRoZUltZyA9ICh0eXBlb2YgKGlkT3JFbGVtZW50KSA9PSAnc3RyaW5nJykgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZE9yRWxlbWVudCkgOiBpZE9yRWxlbWVudDtcclxuICAgIHZhciBjdnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGN2cy53aWR0aCA9IHRoZUltZy53aWR0aDtcclxuICAgIGN2cy5oZWlnaHQgPSB0aGVJbWcuaGVpZ2h0O1xyXG4gICAgdmFyIGN0eCA9IGN2cy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBjdHguZHJhd0ltYWdlKHRoZUltZywgMCwgMCk7XHJcblxyXG4gICAgcmV0dXJuIChjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGN2cy53aWR0aCwgY3ZzLmhlaWdodCkpO1xyXG59XHJcblxyXG5cclxuXHJcbiAgLy9odHRwczovL2dpdGh1Yi5jb20vanBlZy1qcy9qcGVnLWpzL2Jsb2IvbWFzdGVyL2xpYi9lbmNvZGVyLmpzIl19
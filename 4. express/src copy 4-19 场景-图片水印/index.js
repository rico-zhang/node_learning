require('./routes/init');


/* const path = require('path');
const Jimp = require('jimp');

async function mark(
    waterFile,
    originFile,
    targetFile,
    proportion = 5,
    marginProportion = 0.01
) {
    const [water, origin] = await Promise.all([
        Jimp.read(waterFile),
        Jimp.read(originFile)
    ]);
    //对水印图片进行缩放
    const curProportion = origin.bitmap.width / water.bitmap.width;
    water.scale(curProportion / proportion);

    //计算位置
    const right = origin.bitmap.width * marginProportion;
    const bottom = origin.bitmap.height * marginProportion;
    const x = origin.bitmap.width - right - water.bitmap.width;
    const y = origin.bitmap.height - bottom - water.bitmap.height;

    //写入水印

    origin.composite(water, x, y, {
        mode: Jimp.BLEND_SOURCE_OVER,
        opacitySource: 0.3
    });

    await origin.write(targetFile);
}

async function test() {
    const resPath = path.resolve(__dirname, './resoureces');
    const originPath = `${resPath}/1.png`;
    const waterImgPath = `${resPath}/logo.png`;
    const targetImgPath = `${resPath}/1-warter.png`;
    mark(waterImgPath,originPath,targetImgPath);
}

test() */

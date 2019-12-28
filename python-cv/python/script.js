import * as bodyPix from '@tensorflow-models/body-pix';

const outputStride = 16;
const segmentationThreshold = 0.5;

const imageElement = document.getElementById('image');

// load the BodyPix model from a checkpoint
const net = await bodyPix.load();

const segmentation = await net.estimatePersonSegmentation(imageElement, outputStride, segmentationThreshold);

console.log(segmentation);
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ModelView from './ModelView';
import { useRef, useState, useEffect } from 'react';
import { yellowImg } from '../utils';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import { models, sizes } from '../constants';
import { animateWithGsapTimeline } from '../utils/animations';

const ModelFlagshipLaptop = ({ modelState }) => {
  // const [model, setModel] = useState({
  //   title: 'iPhone 15 Pro in Natural Titanium',
  //   color: ['#8F8A81', '#FFE7N9', '#6F6C64'],
  //   img: yellowImg,
  // });

  // Camera control for model view
  // const cameraControlSmall = useRef();
  // const cameraControlLarge = useRef();

  // Model
  // const small = useRef(new THREE.Group());
  // const large = useRef(new THREE.Group());

  // Rotation
  // const [smallRotation, setSmallRotation] = useState(0);
  // const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  // useEffect(() => {
  //   if (size === 'large') {
  //     animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
  //       transform: 'translateX(-100%)',
  //       duration: 2,
  //     });
  //   }

  //   if (size === 'small') {
  //     animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
  //       transform: 'translateX(0)',
  //       duration: 2,
  //     });
  //   }
  // }, [size]);

  useGSAP(() => {
    gsap.to('#heading', {
      y: 0,
      opacity: 1,
    });
    gsap.to('#flagship', {
      opacity: 1,
      y: -50,
    });
  }, [modelState]);

  console.log(modelState);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        {/* {modelState === 'laptop' ? (
          <h1 id="heading" className="section-heading" style={{ opacity: '0' }}>
            Our Flagship Product: Alienware
          </h1>
        ) : modelState === 'tablet' ? (
          <h1
            id="heading"
            className="section-heading"
            style={{ opacity: '0.75' }}
          >
            Our Flagship Product: Cyberpunk Tablet
          </h1>
        ) : null} */}
        {modelState === 'laptop' ? (
          <h1 id="heading" className="section-heading" style={{ opacity: '0' }}>
            Our Flagship Product: Alienware Laptop
          </h1>
        ) : null}
        {modelState === 'tablet' ? (
          <h1 id="heading" className="section-heading" style={{ opacity: '0' }}>
            Our Flagship Product: Cyberpunk Tablet
          </h1>
        ) : null}
        {modelState === 'accessories' ? (
          <h1 id="heading" className="section-heading" style={{ opacity: '0' }}>
            Our Flagship Product: Pear Vision Pro
          </h1>
        ) : null}
        {modelState === 'phones' ? (
          <h1 id="heading" className="section-heading" style={{ opacity: '0' }}>
            Our Flagship Product: Pear IPhone X
          </h1>
        ) : null}

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              // groupRef={small}
              gsapType="view1"
              // controlRef={cameraControlSmall}
              // setRotationState={setSmallRotation}
              // item={model}
              // size={size}
              modelState={modelState}
            />

            {/* {modelState === 'laptop' ? null : (
              <ModelView
                index={2}
                groupRef={large}
                gsapType="view2"
                controlRef={cameraControlLarge}
                setRotationState={setLargeRotation}
                item={model}
                size={size}
                modelState={modelState}
              />
            )} */}
            <Canvas
              className="w-full h-full"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden',
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>
          <div
            className="flex flex-col items-center opacity-0 translate-y-20"
            id="flagship"
          >
            <a href="#flagship" className="btn">
              Buy
            </a>
          </div>

          {/* <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>

              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? 'white' : 'transparent',
                      color: size === value ? 'black' : 'white',
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ModelFlagshipLaptop;
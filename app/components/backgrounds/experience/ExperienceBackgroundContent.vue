<template>
  <template>
    <TresOrthographicCamera
      :args="[-d * aspect, d * aspect, d, -d, 1, 1000]"
      :position="[0, 0, 5]"
    />
    <TresHemisphereLight :sky-color="'white'" :intensity="1" />

    <TresMesh>
      <TresPlaneGeometry :args="[2 * aspect, 2]" />
      <TresShaderMaterial
        :uniforms="shadersUniforms"
        :vertex-shader="vertexShader"
        :fragment-shader="fragmentShader"
      />
    </TresMesh>
  </template>
</template>

<script setup lang="ts">
interface Props {
  time: number;
}

const props = defineProps<Props>();

const time = computed(() => props.time);

const aspect = window.innerWidth / window.innerHeight;
const d = 1;

const vertexShader = `
uniform float uTime;
varying vec2 vUv;
void main() {
    vUv = uv;
    vec3 newPosition = position;
    newPosition.z += sin(position.x * 5.0 + uTime) * 0.2;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const fragmentShader = `
uniform float uTime;
uniform float uTimeCloud;
varying vec2 vUv;
uniform vec2 uRes;

float hash(float n) {
  return fract(sin(n) * 43758.5453123);
}

float hash2(vec2 p){
  return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453);
}

float random (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float noise(float p) {
  float i = floor(p);
  float f = fract(p);
  f = f * f * (3.0 - 2.0 * f);

  return mix(hash(i), hash(i + 1.0), f);
}

float fbm(float x, float octaves){
  float val = 0.0;
  float amp = 0.5;
  float freq = 1.0;
  for(int i = 0; i < 6; i++) {
    if (float(i) >= octaves) {
      val += amp * noise(x * freq);
    }

    freq *= 2.17;
    amp *= 0.48;
  }

  return val;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  float y = step(0.5, vUv.y);

  vec3 c1 = vec3(0.05, 0.00, 0.09); // dark
  vec3 c2 = vec3(0.52, 0.00, 0.82);

  float starMask = 1.0;
  float xC, dist, speed, position, mask;
  vec3 lC;

  float stepMain = step(0.5, vUv.y);
  vec3 c = mix(c1, c2, ((1.0 - vUv.y) - 0.1));

  // Layer 1
  speed = uTimeCloud * 175.0;
  xC = uv.x * aspect * 2.0 + speed * 0.044 * 0.070;
  position = fbm(xC, 2.0) * 0.11 + fbm(xC * 0.3 + 68.0, 3.0) * 0.9;
  dist = abs(uv.y - position - 0.85);
  mask = smoothstep(position + 0.005, position - 0.005, uv.y - 0.85);
  vec3 l1C = vec3(0.14, 0.10, 0.24);
  float stepL1 = step(0.5, (1.0 - vUv.y));
  c = mix(c, l1C, mask);
  float l1Dist = abs(uv.y - 0.995);
  float l1Glow = smoothstep(0.012, 0.0, dist) * 0.15;
  float l1Glow2 = smoothstep(0.04, 0.0, dist) * 0.075;
  c += vec3(0.20, 0.10, 0.35) * l1Glow;
  c += vec3(0.12, 0.06, 0.22) * l1Glow2;
  starMask *= (1.0 - mask);

  // Layer 2
  speed = uTimeCloud * 110.0;
  xC = uv.x * aspect * 2.0 + speed * 0.044 * 0.070;
  position = fbm(xC, 7.5) * 0.3 + fbm(xC * 0.5 + 90.0, 2.0) * 0.85;
  dist = abs(uv.y - position - 0.75);
  mask = smoothstep(position + 0.01, position - 0.01, uv.y - 0.75);
  vec3 l2C = vec3(0.11, 0.07, 0.19);
  float stepL2 = step(0.6, (1.0 - vUv.y));
  c = mix(c, l2C, mask);
  float l2Glow = smoothstep(0.012, 0.0, dist) * 0.12;
  float l2Glow2 = smoothstep(0.04, 0.0, dist) * 0.06;
  c += vec3(0.20, 0.10, 0.35) * l2Glow;
  c += vec3(0.24, 0.00, 0.47) * l2Glow2;
  starMask *= (1.0 - mask);

  // Layer 3
  speed = uTimeCloud * 125.0;
  xC = uv.x * aspect * 2.0 + speed * 0.044 * 0.070;
  position = fbm(xC, 2.0) * 0.11 + fbm(xC * 0.3 + 68.0, 3.0) * 0.9;
  dist = abs(uv.y - position - 0.6);
  mask = smoothstep(position + 0.01, position - 0.01, uv.y - 0.6);
  vec3 l3C = vec3(0.05, 0.00, 0.09);
  float stepL3 = step(0.7, (1.0 - vUv.y));
  c = mix(c, l3C, mask);
  float l3Glow = smoothstep(0.015, 0.0, dist) * 0.1;
  float l3Glow2 = smoothstep(0.04, 0.0, dist) * 0.03;
  c += vec3(0.20, 0.10, 0.35) * l3Glow;
  c += vec3(0.24, 0.00, 0.47) * l3Glow2;
  starMask *= (1.0 - mask);

  // Layer 4
  speed = uTimeCloud * 100.0;
  xC = uv.x * aspect * 2.0 + speed * 0.044 * 0.070;
  position = fbm(xC, 7.0) * 0.11 + fbm(xC * 0.3 + 85.0, 2.0) * 1.0;
  dist = abs(uv.y - position - 0.4);
  mask = smoothstep(position + 0.01, position - 0.01, uv.y - 0.4);
  vec3 l4C = vec3(0.03, 0.018, 0.055);
  c = mix(c, l4C, mask);
  float l4Glow = smoothstep(0.015, 0.0, dist) * 0.25;
  float l4Glow2 = smoothstep(0.04, 0.0, dist) * 0.06;
  c += vec3(0.20, 0.10, 0.35) * l4Glow;
  c += vec3(0.24, 0.00, 0.47) * l4Glow2;
  starMask *= (1.0 - mask);

  // stars
  float rnd = random(uv * 10.0);
  float dotAlpha = step(0.999, rnd);
  float sinStars = 0.5 + 0.5 * sin(uTime * 5.0 * 6.28 * uv.x);
  float starBrightness = 1.0;

  c += vec3(dotAlpha) * starMask * sinStars * starBrightness;

  gl_FragColor = vec4(c, 1.0);
}
`;

const shadersUniforms = computed(() => {
  return {
    uTime: { value: time.value },
    uTimeCloud: { value: 1.0 },
    uRes: { value: [window.innerWidth, window.innerHeight] },
  };
});
</script>

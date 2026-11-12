export const fragmentShader = `
  uniform sampler2D globeTexture;
  
  varying vec2 vertexUV;
  varying vec3 vertexNormal;
  
  void main() {
    float intensity = 1.01 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
    vec3 atmosphere = vec3(0.3, 0, 0.0) + pow(intensity, 2.5); 
  
    gl_FragColor = vec4(atmosphere + texture2D(globeTexture, vertexUV).xyz, 1.0);
  }`;

export const vertexShaderAtmosphere = `
  varying vec3 vertexNormal;
  
  void main () {
    vertexNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`;

export const fragmentShaderAtmosphere = `  
  varying vec3 vertexNormal;
  
  void main() {
    float intensity = pow(0.65  - dot(vertexNormal, vec3(0, 0, 1.0)), 2.0);
  
    gl_FragColor = vec4(0.3, 0.0, 0.0, 1.0) * intensity;
  }`;

export const vertexShader = `
  varying vec2 vertexUV;
  varying vec3 vertexNormal;
  
  void main () {
    vertexUV = uv;
    vertexNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`;

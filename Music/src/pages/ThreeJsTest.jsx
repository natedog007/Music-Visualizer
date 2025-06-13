import { Canvas } from "@react-three/fiber"
import NavBar from '../components/NavBar'

function ThreeJsTest() {

  return (
    <>
    <NavBar/>
    <div className="w-screen h-screen">
        <Canvas camera={{ position: [2,2,2]}} className="bg-blue-400">
          <mesh>
            <sphereGeometry args={[2, 80, 80]}/>
            <meshPhongMaterial color='green'/>
            <directionalLight position={[2,5,1]}/>
          </mesh>
        </Canvas>
    </div>

    </>
  )
}

export default ThreeJsTest

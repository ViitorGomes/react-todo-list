import { Wrapper1, Wrapper2, Wrapper3 } from "./style";
export default function index({children}) {
  return <Wrapper1>
      <Wrapper2>
          <Wrapper3>
              {children}
          </Wrapper3>
      </Wrapper2>
  </Wrapper1>;
}

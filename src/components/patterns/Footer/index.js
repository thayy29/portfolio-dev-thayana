import { Box, Text } from "../../../theme/components";
import { theme } from "../../../theme/theme";

export default function Footer() {
  return (
    <div className="footer relative top-56">
      <div className="structure h-auto w-full fixed bottom-0 z-50">
        <div className="text-content bg-slate-400 text-zinc-50 p-8 flex justify-center items-center">
          {" "}
          {new Date().getFullYear()} Thayana Classo Soares. Todos os direitos
          reservados.
        </div>
      </div>
    </div>
  );
}

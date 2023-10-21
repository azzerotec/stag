import { Modal } from "./modal";
import { Coluna } from "./layout/Flex";

const terms =
  "Lorem ipsum dolor sit amet consectetur. Quam quis vulputate in semper tellus accumsan. Consectetur faucibus sed massa ut at. Tincidunt velit elit quis accumsan fermentum libero nisl tincidunt amet. Ut orci ac sit consectetur. Ut diam eu porttitor lacinia amet aenean. Duis aliquam viverra blandit urna amet. Lectus viverra suspendisse et tristique pulvinar nunc fringilla faucibus tincidunt. Morbi dui a dignissim magnis feugiat enim. Viverra nullam elit in magna morbi. In ac scelerisque id id lacinia eget. Facilisis fringilla tellus platea sed nunc. Id turpis egestas elementum sapien scelerisque tellus viverra amet sed. Pellentesque in lacus etiam bibendum etiam lorem eget nunc. Eget nunc pellentesque metus quam pellentesque sed ultricies. Adipiscing aenean purus metus felis ut gravida. Donec arcu iaculis neque sed dui lacinia purus imperdiet. Eu ipsum in id velit erat viverra ut. Habitasse varius volutpat rhoncus sit convallis orci. Ornare orci urna donec maecenas at. Egestas aenean sagittis imperdiet feugiat. Feugiat integer nisi leo risus sodales vel. Diam commodo nibh pretium aenean. Vestibulum curabitur dictumst aliquam tellus rutrum tincidunt eget egestas. Id orci aliquet tellus elit massa diam nam non adipiscing. Quis volutpat in diam lobortis cras. Sit augue risus et neque amet. In consequat magna dignissim tellus at. Laoreet donec duis et donec. Ullamcorper eget integer eget tellus condimentum leo diam praesent. Dictumst vivamus sem quis ipsum ut metus porttitor non. Vestibulum viverra sed diam quam. Ac augue arcu sapien sit. Viverra sit etiam a venenatis mauris nullam gravida tristique diam. Arcu urna at risus vulputate sed. Magna massa curabitur elit faucibus sem.";

export const TermsOfUse = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Coluna className=" max-w-2xl items-center px-28 py-24 text-center">
        <h1 className="font-montserrat text-3xl font-semibold text-a424A57">
          Termos e condições de uso
        </h1>
        <textarea value={terms} className="h-96 w-full" disabled />
      </Coluna>
    </Modal>
  );
};

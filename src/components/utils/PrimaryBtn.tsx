import { Button } from "../ui/button";

const PrimaryBtn = ({ value }: { value: string }) => {
  return (
    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600  shadow-md  dark:text-white hover:bg-blue-600 hover:text-white">
      {value}
    </Button>
  );
};

export default PrimaryBtn;

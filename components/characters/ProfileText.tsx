interface Props {
  label: string;
  text: string;
}

const ProfileText: React.FC<Props> = ({ label, text }) => {
  return (
    <p className="flex justify-between py-1 font-semibold space-x-3 text-secondary">
      <span className="capitalize">{label} </span>
      <span>{text}</span>
    </p>
  );
};

export default ProfileText;

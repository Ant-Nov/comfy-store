export const SubmitBtn = ({ title, isPending, className }) => {
  return (
    <button className={`btn btn-block ${className}`} disabled={isPending}>
      {isPending && <span className="loading loading-spinner"></span>}
      {title}
    </button>
  );
};
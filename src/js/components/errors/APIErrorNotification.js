import useAPIError from "js/hooks/useAPIError";
import { Dialog } from "@headlessui/react";

function APIErrorNotification() {
  const { error, removeError } = useAPIError();
  const handleSubmit = () => {
    removeError();
  };

  return (
    <Dialog
      open={!!error}
      onClose={() => removeError()}
      data-testid="notification-modal"
    >
      <div>
        {error && error.message && <p>({error.message})</p>}
        <button data-testid="notification-submit-button" onClick={handleSubmit}>
          Ok
        </button>
      </div>
    </Dialog>
  )
}

export default APIErrorNotification;
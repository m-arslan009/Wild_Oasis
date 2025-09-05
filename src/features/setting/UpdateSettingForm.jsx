import Form from "../../UI/Form";
import FormRow from "../../UI/FormRow";
import Input from "../../UI/Input";
import { useSetting } from "./useSetting";
import Spinner from "../../UI/Spinner";
import { useUpdateSetting } from "./useUpdateSetting";

export default function UpdateSettingForm() {
  // initialize the setting to empty object to avoid destructuring error
  const {
    setting: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
    isLoading,
  } = useSetting();

  const { updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleChange(e, name) {
    const { value } = e.target;
    updateSetting({ [name]: Number(value) });
  }

  return (
    <Form>
      <FormRow label={"Minimum nights/booking"}>
        <Input
          type="number"
          name="minBookingLength"
          defaultValue={minBookingLength}
          onBlur={(e) => handleChange(e, "minBookingLength")}
        />
      </FormRow>

      <FormRow label={"Maximum nights/booking"}>
        <Input
          type="number"
          name="maxBookingLength"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleChange(e, "maxBookingLength")}
        />
      </FormRow>

      <FormRow label={"Maximum guests/booking"}>
        <Input
          type="number"
          name="maxGuestsPerBooking"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleChange(e, "maxGuestsPerBooking")}
        />
      </FormRow>

      <FormRow label={"Breakfast price"}>
        <Input
          type="number"
          name="breakfastPrice"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleChange(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

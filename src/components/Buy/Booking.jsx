import {
  Button,
  Checkbox,
  Container,
  Grid,
  Group,
  NativeSelect,
  Paper,
  RingProgress,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import {
  IconBookmarkOff,
  IconCheck,
  IconChevronDown,
  IconCreditCard,
  IconExchange,
  IconQuestionMark,
  IconShoppingBag,
  IconX,
} from "@tabler/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Booking = () => {
  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setProperty(location.state?.data);
  }, [location]);

  const [payment, setPayment] = useState("bank transfer");
  const [booking, setBooking] = useState("advance paid");

  const navigate = useNavigate();

  const bookingData = [
    { value: "advance paid", label: "Advance" },
    { value: "full paid", label: "Full" },
    { value: "interested in", label: "Interested In" },
    { value: "on hold", label: "On Hold" },
  ];

  const paymentMethods = [
    { value: "bank transfer", label: "Bank Transfer" },
    { value: "cash", label: "Cash" },
    { value: "easypaisa", label: "Easy Paisa" },
  ];

  const AdvancePaymentProgress = [{ value: 30, color: "blue" }];
  const FullPaymentProgress = [{ value: 100, color: "green" }];
  const InterestedPaymentProgress = [{ value: 0, color: "yellow" }];
  const OnHoldPaymentProgress = [{ value: 0, color: "red" }];

  const [paymentDetails, setPaymentDetails] = useState("");

  const form = useForm({
    initialValues: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      phoneNumber: "",
      address: "",
      easyPaisaNumber: "",
    },

    validate: (values) => {
      if (payment === "bank transfer") {
        return {
          cardNumber:
            values.cardNumber.length < 16
              ? "Card number must include at least 16 characters"
              : null,
          expiryDate:
            values.expiryDate.length < 4
              ? "Expiry date must include at least 4 characters"
              : null,
          cvv:
            values.cvv.length < 3
              ? "CVV must include at least 3 characters"
              : null,
        };
      }

      if (payment === "cash") {
        return {
          phoneNumber:
            values.phoneNumber.length < 11
              ? "Phone number must include at least 11 characters"
              : null,
          address:
            values.address.length < 5
              ? "Address must include at least 5 characters"
              : null,
        };
      }

      if (payment === "easypaisa") {
        return {
          easyPaisaNumber:
            values?.easyPaisaNumber?.length < 11
              ? "Phone number must include at least 11 characters"
              : null,
        };
      }

      return {};
    },
  });

  const handleSubmit = (values) => {
    setLoading(true);

    values.paymentDetails = paymentDetails;
    values.paymentMethod = payment;

    property?.propertyIs === "For Rent"
      ? (values.paymentAmount = property?.monthlyRent)
      : (values.paymentAmount = property?.totalPrice);

    // values.paymentAmount = property?.totalPrice
    values.bookingType = booking;
    values.propertyId = property?._id;
    values.propertyDescription = property?.propertyDescription;

    axios
      .post(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + "/customer/bookProperty",
        values,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log("booking response: ", res);

        if (property?.propertyAvailabilityStatus === "RESERVED") {
          showNotification({
            title: "Booking failed. Property already Reserved!",
            message: "Contact the Agency Owner for booking!",
            color: "blue",
            icon: <IconBookmarkOff size={14} />,
            autoClose: 6000,
          });
          setLoading(false);
          return;
        }

        if (res?.data?.success === true) {
          showNotification({
            title: "Property Booked!",
            message: "Your property has been booked!",
            color: "green",
            icon: <IconCheck size={14} />,
            autoClose: true,
          });
          navigate("/");
        } else {
          showNotification({
            title: "Property booking Failed",
            message: "Booking failed. Please try again.",
            color: "red",
            icon: <IconX size={14} />,
            autoClose: true,
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("update error: ", err);
        setLoading(false);
        showNotification({
          title: "Property booking Failed",
          message: "Network error. Please try again.",
          color: "red",
          icon: <IconX size={14} />,
          autoClose: true,
        });
      });
  };

  return (
    <Container size={"xl"}>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Grid columns={12}>
          <Grid.Col md={6}>
            <Paper
              shadow="sm"
              radius="md"
              withBorder
              style={{ borderColor: "lightgrey", borderWidth: 1 }}
              p={30}
              mt={30}
            >
              <Group spacing={"xs"} noWrap position="center" mb={"lg"}>
                <Text
                  weight={700}
                  style={{
                    fontSize: 26,
                    color: "#D92228",
                    textAlign: "center",
                  }}
                >
                  Booking
                </Text>
                <IconShoppingBag
                  style={{
                    color: "#D92228",
                  }}
                  size={30}
                />
              </Group>

              <Group position="apart" mt="lg" noWrap>
                <NativeSelect
                  label="Booking Status"
                  placeholder="Select Booking Status"
                  data={bookingData}
                  rightSection={<IconChevronDown size={14} />}
                  rightSectionWidth={40}
                  value={booking}
                  size="md"
                  style={{
                    width: "100%",
                  }}
                  required
                  onChange={(event) => setBooking(event.target.value)}
                />
                <NativeSelect
                  label="Payment Method"
                  placeholder="Select Payment Method"
                  data={paymentMethods}
                  rightSection={<IconChevronDown size={14} />}
                  rightSectionWidth={40}
                  value={payment}
                  defaultValue={paymentMethods[0]}
                  size="md"
                  style={{
                    width: "100%",
                  }}
                  required
                  onChange={(event) => setPayment(event.target.value)}
                />
              </Group>
            </Paper>
          </Grid.Col>
          <Grid.Col md={6}>
            <Paper
              shadow="sm"
              radius="md"
              withBorder
              style={{ borderColor: "lightgrey", borderWidth: 1 }}
              p={30}
              mt={30}
              display={
                booking === "advance paid" || booking === "full paid"
                  ? "block"
                  : "none"
              }
            >
              <Group spacing={"xs"} noWrap position="center" mb={"lg"}>
                <Text
                  weight={700}
                  style={{
                    fontSize: 26,
                    color: "#D92228",
                    textAlign: "center",
                  }}
                >
                  Payment Breakdown
                </Text>
              </Group>
              <Group position="center">
                <RingProgress
                  size={120}
                  thickness={11}
                  sections={
                    booking === "advance paid"
                      ? AdvancePaymentProgress
                      : booking === "full paid"
                      ? FullPaymentProgress
                      : booking === "interested in"
                      ? InterestedPaymentProgress
                      : OnHoldPaymentProgress
                  }
                  label={
                    <Text size="xs" align="center">
                      {booking === "advance paid" ? (
                        <Text weight={600} size="lg">
                          30%
                        </Text>
                      ) : booking === "full paid" ? (
                        <Text weight={600} size="lg">
                          100%
                        </Text>
                      ) : booking === "interested in" ? (
                        <Text weight={600} size="lg">
                          0%
                        </Text>
                      ) : (
                        <Text weight={600} size="lg">
                          0%
                        </Text>
                      )}
                    </Text>
                  }
                />
                <Stack>
                  <Text size="xs" align="center">
                    {booking === "advance paid" ? (
                      <Text weight={600} size="lg">
                        {property?.propertyIs === "For Rent" ? (
                          <Text weight={600} size="lg">
                            30% Advance Payment Rs.{" "}
                            {property?.monthlyRent * 0.3}
                          </Text>
                        ) : (
                          <Text weight={600} size="lg">
                            30% Advance Payment Rs. {property?.totalPrice * 0.3}
                          </Text>
                        )}
                        {/* 30% Advance Payment Rs. {property?.totalPrice * 0.3} */}
                      </Text>
                    ) : booking === "full paid" ? (
                      <Text weight={600} size="lg">
                        {property?.propertyIs === "For Rent" ? (
                          <Text weight={600} size="lg">
                            100% Full Payment Rs. {property?.monthlyRent}
                          </Text>
                        ) : (
                          <Text weight={600} size="lg">
                            100% Full Payment Rs. {property?.totalPrice}
                          </Text>
                        )}
                      </Text>
                    ) : booking === "interested in" ? (
                      <Text weight={600} size="lg">
                        Interested Payment Rs. 0
                      </Text>
                    ) : (
                      <Text weight={600} size="lg">
                        On Hold Payment Rs. 0
                      </Text>
                    )}
                  </Text>
                </Stack>
              </Group>
            </Paper>
            {payment === "bank transfer" && (
              <Paper
                shadow="sm"
                radius="md"
                withBorder
                style={{ borderColor: "lightgrey", borderWidth: 1 }}
                p={30}
                mt={30}
              >
                <Stack>
                  <Group position="apart">
                    <TextInput
                      hideControls
                      placeholder="1234 1234 1234 1234"
                      maxLength={16}
                      label="Card Number"
                      style={{
                        width: "40%",
                      }}
                      icon={<IconCreditCard />}
                      {...form.getInputProps("cardNumber")}
                    />
                    <TextInput
                      hideControls
                      placeholder="MM/YY"
                      label="Expiry Date"
                      style={{
                        width: "30%",
                      }}
                      {...form.getInputProps("expiryDate")}
                      maxLength={5}
                    />
                    <TextInput
                      hideControls
                      placeholder="123"
                      label="CVV"
                      style={{
                        width: "20%",
                      }}
                      {...form.getInputProps("cvv")}
                      maxLength={3}
                    />
                  </Group>
                </Stack>
              </Paper>
            )}
            {payment === "easypaisa" && (
              <Paper
                shadow="sm"
                radius="md"
                withBorder
                style={{ borderColor: "lightgrey", borderWidth: 1 }}
                p={30}
                mt={15}
              >
                <Stack>
                  <Group position="apart">
                    <TextInput
                      hideControls
                      placeholder="03xxxxxxxxx"
                      label="Easy Paisa Number"
                      style={{
                        width: "100%",
                      }}
                      icon={<IconCreditCard />}
                      {...form.getInputProps("easyPaisaNumber")}
                      maxLength={11}
                    />
                  </Group>
                </Stack>
              </Paper>
            )}
            {payment === "cash" && (
              <Paper
                shadow="sm"
                radius="md"
                withBorder
                style={{ borderColor: "lightgrey", borderWidth: 1 }}
                p={30}
                mt={15}
              >
                <Stack>
                  <Group>
                    <TextInput
                      hideControls
                      placeholder="03xxxxxxxxx"
                      label="Phone Number"
                      style={{
                        width: "100%",
                      }}
                      icon={<IconCreditCard />}
                      {...form.getInputProps("phoneNumber")}
                      maxLength={11}
                    />
                  </Group>
                  <Group>
                    <Textarea
                      hideControls
                      placeholder="home address here"
                      label="Address"
                      style={{
                        width: "100%",
                      }}
                      {...form.getInputProps("address")}
                    />
                  </Group>
                </Stack>
              </Paper>
            )}
            {property?.propertyIs === "For Exchange" ? (
              <Paper
                shadow="sm"
                radius="md"
                withBorder
                style={{ borderColor: "lightgrey", borderWidth: 1 }}
                p={30}
                mt={15}
              >
                <Group>
                  <Textarea
                    placeholder="enter payment details for propert exchanging"
                    label="Exchange Details"
                    style={{
                      width: "100%",
                    }}
                    size="md"
                    required
                    onChange={(event) => setPaymentDetails(event.target.value)}
                  />
                </Group>
              </Paper>
            ) : (
              <Paper
                shadow="sm"
                radius="md"
                withBorder
                style={{ borderColor: "lightgrey", borderWidth: 1 }}
                p={30}
                mt={15}
              >
                <Group>
                  <Textarea
                    placeholder="enter property details"
                    label="Payment Details"
                    style={{
                      width: "100%",
                    }}
                    size="md"
                    required
                    onChange={(event) => setPaymentDetails(event.target.value)}
                  />
                </Group>
              </Paper>
            )}
            <Group mt={"md"} position="apart" noWrap>
              <Button
                fullWidth
                style={{
                  backgroundColor: "#D92228",
                  color: "white",
                }}
              >
                Cancel
              </Button>
              <Button
                fullWidth
                style={{
                  backgroundColor: "#0b4096",
                  color: "white",
                }}
                type="submit"
                loading={loading}
              >
                Pay
              </Button>
            </Group>
          </Grid.Col>
        </Grid>
      </form>
    </Container>
  );
};

export default Booking;

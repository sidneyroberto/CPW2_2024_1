const $ = document.querySelector.bind(document);

const calculateLoan = () => {
  const amountStr = $("#amount").value;
  const amount = Number(amountStr);

  if (amount > 0) {
    const installmentsStr = $("#installments").value;
    const installments = Number(installmentsStr);
    const clientType = $("input[name='client-type']:checked").value;
    let tax = 1.2;

    if (clientType === "standard") {
      tax = 2.5;
    } else if (clientType === "platinum") {
      tax = 1.99;
    }

    const realAmount = amount * (1 + (tax / 100) * installments);
    const realInstallment = realAmount / installments;

    $("#result").innerText = `Total a ser pago: R$ ${realAmount.toFixed(
      2
    )}. Valor de cada uma das ${installments} parcelas: R$ ${realInstallment.toFixed(
      2
    )}`;
  }
};

$("#amount").oninput = calculateLoan;
$("#installments").oninput = calculateLoan;
$("#standard").onclick = calculateLoan;
$("#platinum").onclick = calculateLoan;
$("#gold").onclick = calculateLoan;

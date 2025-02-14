$(document).ready(function () {
  // Set default headers for AJAX requests
  $.ajaxSetup({
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Function to handle submission of license information
  window.submitLicenseInfo = function () {
    let licenseInfo = {
      licenseeName: $("#licenseeName").val(),
      assigneeName: $("#assigneeName").val(),
      expiryDate: $("#expiryDate").val(),
    };
    localStorage.setItem("licenseInfo", JSON.stringify(licenseInfo));
    $("#mask, #form").hide();
  };

  // Function to handle search input
  $("#search").on("input", function (e) {
    $("#product-list").load("/search?search=" + e.target.value);
  });

  // Function to show license form
  window.showLicenseForm = function () {
    let licenseInfo = JSON.parse(localStorage.getItem("licenseInfo"));
    $("#licenseeName").val(licenseInfo?.licenseeName || "CrashyRoot");
    $("#assigneeName").val(licenseInfo?.assigneeName || "Root");
    $("#expiryDate").val(licenseInfo?.expiryDate || "2111-11-11");
    $("#mask, #form").show();
  };

  // Function to show VM options
  window.showVmoptins = function () {
    var text =
      "-javaagent:/(Your Path)/ja-netfilter/ja-netfilter.jar\n" +
      "--add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED\n" +
      "--add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED";
    copyText(text).then((result) => {
      alert(result);
    });
  };

  // Function to copy license
  window.copyLicense = async function (e) {
    while (localStorage.getItem("licenseInfo") === null) {
      $("#mask, #form").show();
      await new Promise((r) => setTimeout(r, 1000));
    }
    let licenseInfo = JSON.parse(localStorage.getItem("licenseInfo"));
    let productCode = $(e).closest(".card").data("productCodes");
    let data = {
      licenseName: licenseInfo.licenseeName,
      assigneeName: licenseInfo.assigneeName,
      expiryDate: licenseInfo.expiryDate,
      productCode: productCode,
    };
    $.post("/generateLicense", JSON.stringify(data)).then((response) => {
      copyText(response)
        .then(() => {
          alert("Copied Successfully");
        })
        .catch(() => {
          alert(
            "The system does not support the copy function, or the current non-SSL access, if it is a local environment, please use 127.0.0.1 or localhost to access."
          );
        });
    });
  };

  // Function to copy text to clipboard
  const copyText = async (val) => {
    if (navigator.clipboard && navigator.permissions) {
      return navigator.clipboard.writeText(val);
    } else {
      console.log(val);
      const scrollX = window.scrollX;
      const textArea = document.createElement("textarea");
      textArea.value = val;
      // Make the text area not in the viewport and set it invisible
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        const result = document.execCommand("copy");
        return result ? Promise.resolve() : Promise.reject();
      } catch (e) {
        return Promise.reject(e);
      } finally {
        textArea.remove();
        window.scrollTo(scrollX, 0);
      }
    }
  };
});

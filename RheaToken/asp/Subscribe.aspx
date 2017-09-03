<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Subscribe.aspx.cs" Inherits="asp_Subscribe" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">

    <!-- Bootstrap Core CSS -->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

    <!-- Subscribe CSS -->
    <link href="../css/subscribe.css" rel="stylesheet" />

    <title>Subscription</title>
</head>
<body>
    <form id="form2" runat="server">
        <asp:TextBox ID="textEmail" runat="server" CssClass="input-default input-lg"></asp:TextBox>
        <br />
        <asp:Button ID="btnSubscribe" runat="server" CssClass="btn btn-default btn-lg" Text="SUBSCRIBE"
            OnClick="BtnSubmit" />
    </form>
</body>
</html>

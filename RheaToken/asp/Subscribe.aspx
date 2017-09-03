<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Subscribe.aspx.cs" Inherits="asp_Subscribe" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">
    <title>Subscription</title>
    <style type="text/css">
        .style1 {
            width: 100%;
        }
    </style>
</head>
<body>
    <p>Please enter your e-mail and we will send you news and updates concerning Rhea!</p>
    <form id="form2" runat="server">
        <asp:TextBox ID="textEmail" runat="server"></asp:TextBox>
        <asp:Button ID="btnSubscribe" runat="server" Text="Subscribe"
            OnClick="BtnSubmit" />
    </form>
</body>
</html>
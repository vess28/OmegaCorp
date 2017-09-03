using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class asp_Subscribe : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    public string GetConnectionString()
    {
        //sets the connection string from your web config file "ConnString" is the name of your Connection String
        return System.Configuration.ConfigurationManager.ConnectionStrings["MyConsString"].ConnectionString;
    }

    private void ExecuteInsert(string email)
    {
        SqlConnection conn = new SqlConnection(GetConnectionString());
        string sql = "INSERT INTO RheaSubscriptions.dbo.Subscriptions VALUES "
                    + " (@email)";

        try
        {
            conn.Open();
            SqlCommand cmd = new SqlCommand(sql, conn);
            SqlParameter param = new SqlParameter();
            //param[0] = new SqlParameter("@id", SqlDbType.Int, 20);
            param = new SqlParameter("@email", SqlDbType.VarChar, 255);

            param.Value = email;

            cmd.Parameters.Add(param);

            cmd.CommandType = CommandType.Text;
            cmd.ExecuteNonQuery();
        }
        catch (SqlException ex)
        {
            string msg = "Insert Error:";
            msg += ex.Message;
            throw new Exception(msg);
        }
        catch (Exception ex)
        {
            Response.Write("Service is unavailable please try again later!");
        }
        finally
        {
            conn.Close();
        }
    }

    protected void BtnSubmit(object sender, EventArgs e)
    {
        string currentEmail;

        try
        {
            currentEmail = textEmail.Text.Trim();
        }
        catch (Exception)
        {
            currentEmail = string.Empty;
        }

        if (string.IsNullOrEmpty(currentEmail))
        {
            Response.Write("<p class=\"message-fail\">Please enter your e-mail!</p>");
            textEmail.Focus();
            return;
        }

        if (!currentEmail.Contains("@"))
        {
            Response.Write("<p class=\"message-fail\">Your e-mail must contain an '@' symbol!</p>");
            textEmail.Focus();
            return;
        }

        //call the method to execute insert to the database
        ExecuteInsert(textEmail.Text);
        textEmail.Visible = false;
        btnSubscribe.Visible = false;
        Response.Write("<p class=\"message-success\">Thank you for subscribing!</p>");
    }
}
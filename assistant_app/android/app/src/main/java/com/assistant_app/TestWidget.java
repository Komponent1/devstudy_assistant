package com.assistant_app;

import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.widget.RemoteViews;
import android.content.SharedPreferences;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * Implementation of App Widget functionality.
 */
public class TestWidget extends AppWidgetProvider {
    static void updateAppWidget(Context context, AppWidgetManager appWidgetManager, int appWidgetId) {
        try {
            SharedPreferences sharedPref = context.getSharedPreferences("DATA", Context.MODE_PRIVATE);
            String appString = sharedPref.getString("appData", "{\"datas\":'no data'}");
            JSONObject appData = new JSONObject(appString);
         
            RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.test_widget);
            views.setTextViewText(R.id.appwidget_text, appData.getString("datas"));
            appWidgetManager.updateAppWidget(appWidgetId, views);
        }catch (JSONException e) {
            e.printStackTrace();
        }
    }

    // static void updateAppWidget(Context context, AppWidgetManager appWidgetManager,
    //                             int appWidgetId) {

    //     CharSequence widgetText = context.getString(R.string.appwidget_text);
    //     // Construct the RemoteViews object
    //     RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.test_widget);
    //     views.setTextViewText(R.id.appwidget_text, widgetText);

    //     // Instruct the widget manager to update the widget
    //     appWidgetManager.updateAppWidget(appWidgetId, views);
    // }

    @Override
    public void onUpdate(Context context, AppWidgetManager appWidgetManager, int[] appWidgetIds) {
        // There may be multiple widgets active, so update all of them
        for (int appWidgetId : appWidgetIds) {
            updateAppWidget(context, appWidgetManager, appWidgetId);
        }
    }

    @Override
    public void onEnabled(Context context) {
        // Enter relevant functionality for when the first widget is created
    }

    @Override
    public void onDisabled(Context context) {
        // Enter relevant functionality for when the last widget is disabled
    }
}

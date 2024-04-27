# youtube videos api - 
# youtube videos api auth for Google key

# Debouncing - typing slow = 200ms
             - typing fast = 30ms

Debouncing with 200ms (If some one says)
    - if diff between 2 key storkes is <200ms - DECLINE API CALL
    - if diff between 2 key storkes is >200ms - MAKE AN API CALL

- youtube search suggestion api - http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query

- LRU cache

- There are 2 ways to handle live data
    1. web sockets - Two way connection(or Handshake) between server and UI
                   - No regular interval
                   - Initial connections takes time but once once connection is established it will be fast
                   - Example - TRADING APPS, Whats app

    2. API Polling or Long polling - UI sends the request to server and server gives UI the data
                                   - Its one directional and server sends the payload after some interval
                                   - Example - GMAIL, CRICBUZZ
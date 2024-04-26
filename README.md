# youtube videos api - 
# youtube videos api auth for Google key

# Debouncing - typing slow = 200ms
             - typing fast = 30ms

Debouncing with 200ms (If some one says)
    - if diff between 2 key storkes is <200ms - DECLINE API CALL
    - if diff between 2 key storkes is >200ms - MAKE AN API CALL

- youtube search suggestion api - http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query

- LRU cache
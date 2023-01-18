import React from 'react'
import "../App.css"

function Left() {
  return (
    <div className='left'> 
    <div >
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEUAAAD///+/v7+JiYlZWVkrKyv39/dhYWHg4OCqqqq0tLTQ0NBeXl4jIyPw8PBSUlI8PDxGRkbp6ekxMTGenp7Ly8vY2NgWFhbCwsLz8/N4eHhvb2+SkpIbGxujo6OAgIBqampLS0tE7FX5AAAESklEQVR4nO3daXIaMRCG4Y7NMjb7YjBeYnz/S6aI4wKDekZSLyOlvvcAGT1/qJ6OwPTLt2bTOD+RfB93R0R3vo/0FW7p1Nb1ma7CF/rqxfOhjsLDgr5bHPwe6ydshnRu6Pd54yac0M8mXg/2Ej7QdQ9OT3YS3t8Aie59Hu0jHAeARGOXZ3sI58sgkGg5d3i6g3DH+E7t7B9vL7xrAXqMcObCbSvQYYSzFr52AIlejU9gKzysOoFEK9sRzlTYbCKARLavjJbCpyjfqSfDUxgKbwc1PsMRzk4YGtT47EY4K+EoPKjxjUdGJzESzuM+Yy7bGI1wNsK2QY3PZoQzET5mAYkeLQ5jIXzLBBK9GZzGQNg9qPEZjHDqwnnMoMa3Uv+80RY27yIg0bv2CKcsfBb6Tj3rHklX+FsBSPRb9Uyqwg8VINGH5qEUhaOBEpBooDjC6QnX6YMa32atdi414fXWXpra1l9LmDuo8WmNcErC/EGNT2mE0xFODYBEU5WzaQiFgxqfyginINzNjIBEM4VXRrlQY1Djk49wYmHX1l6aeOsvFWoNanzSEU4mHC26TyhuIRvhRMK13WfMZTPRCCcRxm/tpUm2/gJhytZemmDrny9M29pLy9/6ZwtTt/bSsi9uZArZ6xV25V7cyBPu9u5Aon3eCJclbL9eYVfWxY0cofWgxpczwmUIX7pPYlbG3dtkocugxpc+wqUKG59BjW+WuvVPFPoNanyJI1ya0HNQ40sb4ZKE9i+DcSW9MqYI9bb20gYmwrX/oMa3jH9ljBb2MqjxxY9wscK+BjW+2BEuUmixtZcWufWPE0quV9gVd3EjRjiy2tpLW8WMcBHCpqzPmMv2ESNct9B2ay+te+vfKdS5XmFX58WNLmEpgxpf1wjXLuz5ZTCujlfGVuF62P3vF9CwdYRrE07K/RD92b7t4kaLUP96hV0tFzd4YYmDGh8/wrHCY99nTuyYKIz6wlJZcV+fCgubvo+bVXiECwrLHtT4giNcSNjf1l5aaOsfEPa5tZcW2PrfCKsY1PhuR7hrYeSXIsvt5uuaV0Lte7B9NGkT1jSo8T3yQt/rFXbdc8Jj3ydT6xgUHkra2ktbHm6FeV+KLLfdtbC8rb20u5/Cegc1vu2lsPyNWk4fZ+Go7+sHNs1GZ2EdO7XUhhBWH4T1B2H9QVh/ENYfhPUHYf1BWH+Xwv//Hf84mP5t/K/Pvg+X1ef38b8wg+NZeFOd/wkcvsUXFta5PQ3fi4awpiCEsPwghLD8IISw/CCEsPwghLD8IISw/CCEsPwghLD8IISw/CCEsPwghLD8IISw/CCEsPwghLD8IISw/HyFm+kgran8Z2N8hel/+E7++3C+wvS/CyP/YRUIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQggh9BH+AfsRYB6iYbbFAAAAAElFTkSuQmCC" alt="home_icon" />
     <p>Home</p></div>
    <div>
     <img src="data:image/png;base64,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" alt="short_icon" />
     <p>Shorts</p>
    </div>
    <div>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzU-gdNGCtLnET4IINhnoH8rMQpZtwK43O8w&usqp=CAU" alt="subscription_icon" />
    <p> Subscriptions</p>
     </div>
     <br />
    <hr style={{opacity:"0.5", width:"80%",marginLeft:"15px"}} />
    <br />
    <div>
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAADPz89hYWGWlpalpaXDw8OLi4v8/Pzv7+/p6enT09PZ2dkiIiLy8vJMTExFRUXj4+NycnKvr6+FhYVYWFg6Ojqfn59RUVEKCgpaWlrAwMBCQkJISEg1NTVsbGwVFRUuLi6Pj48HnYJSAAAEGklEQVR4nO3di1raQBCG4QU5JBBCAdFWrVbv/yILta2Kq93DTOYf+n9X4PswEjanDYExxhhjjDHGGGPspabZLMdD17XNQLx2t12NbFrPl/rKbmuk+939VNfXGPuOrWaKwLG17rkHtVGdWtP+dNXrAK+tYS89qhB31qzXXSkMameNettWXnhnbTpJ/BsVakaPraSF1qD3CR/64T5C8S+br9aeSEtJ4MJaE2suKZxZa2KtJYUTa000yX9EgCVFpFZQeGGNidadvXBMIYUUmkchhRTaRyGFFNpH4RDCe1HRaQjC3eybqOltCMJpWHwXRb0JQxjCpajqdSjCoDapacJuf3HSzU5YGBZrUdjf0oSRC9cTaaHWpCIJdSYVShhahUnFEoYwr9LEQhPKX/yAE4b+SxXoXXhC6UlFFMpOKqQwtIKTiimUnFRUodykwgpDK3T3Ea5QalKRhTKTCi0UWftjCyUmFV1YP6nwwuq1P76wdlI9COsm1YUwLCruevQhrJlUL8LySXUjLD5L5UdYOqmehOH27IVFa39fwpIz/96E+ZPqThgWmWt/f8LcSfUozLtG5VIYFhnfqT6FOZPqVZg+qW6FyUd/v8LUSXUsnP04c2HqSsOrMP0MnFNhxorfpzBnLexRmHeO2KEwc/3kT5i7BvYmzPnN7VJYcNbUl7DkfKInYe75C3fCwvP6foSl12a8CPviu2ucCCuukfoQ1lzn9iBsq+6qcSCsvN8EX1j7FAa6sP5JGnChwDMm2EKJ54SQhTJPJQILb2WegsIVSj3JhiosWynFAhUW3VcSD1Mo+VwQolDyiRlIoeCEHsMTSj9jiSasWynFAhMqvD4TSyj/FDCWUOedA0BCpRe84gg1JvQYilDrrRgwQsVXEGMI9d5OgyF8Un0POIJQNwoppNA+Cimk0D4KKaTQPgr9C9P2KEkTPgz/5ye0ERRqrtTLS9srKE0IuCnZaLSSFIJtfvhc4haIacJgtQPwZ0XeBlwh1DqpW1PihlaJws3wgH+Vuk9nohDwiJi6Y1eqEO5DTN5qNVWItBvwr5I3zksWhv3wik9Kf+N8urB/HJzxcRmPG6ULkYjX6cAcYehRBjXxWJ8vBPm6ucvb2TFPGDb2x8WsDzBfeDA+Wf5GXef6CoSHut3lw+muGAO0nYxL9lYtEfqKQv9R6D8K/Ueh/yj0H4X+o9B/FPrvvxTuJ+bln435OMiru6MbQWFrjYl2IShsrDHRJIVBcc/l8kSFiFfoZYVLa00sUWGju8N7WaLCMLXmRJIVIt4NJCxUfEKwNGFh2FqD3iUtbK6sRadJC0OP9n0qLgw92KcoLwwN1v+igvDwjYp00FARHg79OKOqJDz8Rp2rvR0gr72W8FDTdmP78u4JYowxxhhjjDHG2Nn1E2sTe015x+DfAAAAAElFTkSuQmCC" alt="library" />
     <p>
     Library
     </p>
    </div>
    <div>
    <img src="data:image/png;base64,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" alt="history_icon" />
     <p>History</p>
    </div>
    <div>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1vhtxp2T28U99yaNVqKA78aCbtay7F-9ZA&usqp=CAU" alt="your_video_icon" />
     <p>Your videos</p>
    </div>
    <div>
 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAAABAQHw8PC/v784ODgSEhL8/PyhoaH4+PgsLCxVVVVhYWGAgIDW1tbu7u7h4eEYGBi4uLhtbW3CwsKPj49GRkbPz897e3u5ublQUFAhISEmJiaHh4ebm5vJyclDQ0MzMzOqqqrd3d1xcXGVlZUNDQ1dXV0cHBympqa8MV4RAAAM70lEQVR4nO1di3aiMBAliLxfggKiVbTW1v//wYUAVkmikEx8dLnndLdYCXPJZGYyeSnKiBEjRowYMWLEiBEjRowYMQIEBuff3gJnAlbwmW7nWlRDm2/Tz8AivvVmaOSepJG5yGI3T6Y7e71a/axWa3s3TXI39hZmlAZX334f1AL7e89NpmsdsaCvp4nr7f2Le94CWNTQdG1dPXNRaxC/42vdds3wfOcbwJpsM70lhkomKqJDbb+A6zObT6z7hT8fVqhlq7amMIPbqCi2NbrKtHDybAJ3EG4/pmd698hdVmZLcvqxDZ9NgoGyCRmp6R6H0+uQPLpmarxek6zk0bzirJycaG4uPE15PY6Ra4vyu+Bou9GzCXUwz/VaPCF6Z5Llv3o+fzapXxjbBNUNCYAf5lg7mGT7Gopq+TFqXRsU1IZj7L+Ahwy/wPnVHGtz/PX5ZH5BlCOkCtsXBseq1CQKnkkwPei4AYLTa0hWJeuH9EnsDMXYTKHsJ5NjVfp0YzzDORpK4Bz7EWxCz7ZPcf69T9vF5R+d4BkUl6gHv3s0etCsn/H4AMDy7nrAC/szW++K3HHjQ+Z5XnaIXScvdusZ+UXWW0DIe6zfMPzvewRbqVeFmy1OWhpeS2iFqXZaZG6xvvr2DYrf/gMV1YiKW29ebQXWk+w3E0NFkEZmlszammQV2PiNB1EsH7Oxb7z0lt/M3Wj+5PcmWkEYE1/buDP06+VZKmFvHtLhKB+RHZkE1Zafs/fD/tIYgb93Wo6sklV0zB5AsfRMMbPZtOGk7vmToZIYE9/D/RNWAIifGT/AMwZOrYosGUoHvecye6Xk1r64KIcovvrHkR7DfeYsG1rLtXLnCq8qVXfN3RWTI26mudxQ3PCdmwTtWCz9gJMhsX2ToiPVa5RukG7T8Yezw1I4hVQVsDzMGBzxw799IDaUh386dIL1hw5YPyeIHIa/xR86n3LMTRlq5zfeLDIh85yhyQopqg9zKYF4aaYdKsHaTecDvF+vx4U5Iy7EtSjHacTUJ9akTQv4kYZimYjaGvEbjUEf1iBDNF9cOykZFhw3e0RxvViIDP55myOFYG1CP+T0T8uG/0E1qrhTvAF+pBHZ9Nepot0e9lFX2O+oilr+2MA9Db+gvsvyo2QL+qAutgnNplafFKBu0fqmE6xytpDPocCnBvrY88P1+g3FY7XBTP5gX5ix2qIH1fwNJaISLP/xHjFiO/EQ4/kRFMWARXABU/5dLFgUgcJEwyHT2lhtHkUQUyQUFfczYOqQ5gkfS7ChSIpw3EAUnk6J96fW7fyR8MharK6nAGMawYH2+lSUPXZayCSj6Gl5fRBvipFOJRgPdBPGFTjkCGMqRV043R/mJMHyJ5Ht6En4CSLixqqvKOiRrS9CR6vL3dBQzYo25gW4VGu7o8ryJRba+FQbNhscbE9WV2UsuVz1fkY1qELqZMRUHf0YXNBkejF6iHSNLxj5oOppLOIUt6ReVH52uJLBMAzI2KMST6R3k1DVgqNHXzH8fUm8DJVPaqNJuMpSqoh7TmhFVQMmh3gwDA3FJP1++TPnjsDJ7GFlni2O4oDq0LAI54Uz/VyFVZ0mnaxChLj8DxDD0j9TLEPl9vnKc7vtGid+uSISKIaGYXYpVjK6fKVpNqUKHb4QAqwOldChVKKt8RRleAgRVTjjDAPhGCpR1+/jZANPeWnRLUkglAdkSHZ2qsQbTy/KJHS01IYlp1iADJUl2XpK8zC8nNClKAN3gATJ0Igpzccdbh+2R/JFrbgadAVIhoq2IivxODh0sz4oMTenUVaAGWI3di2aij6GdqLCKcXO8EdHoFpaRZOEcNOhaqqR/RRU8EsFW4dKQQqHhk3tN6yMeEsq2vPLBcrQUPbdgLlKjQ2Ll8s+ORHO6ALpAuA6tIj0mIpWw5J/W0rAJjIQAsuwGioiQ7ch1tRQukqKBPMhwHWI80fdGsgGFaqTTdkZPBnvAtAMJw4poD6kAKIXVl7sRYSCZmicyLBmQM+1ThZ03tBMKGkHzVDxZ6SaDkmvdIMGvsDvAuAMibB5YMhlk0oqNrsDnKGxIdXU7n+73zU0WCgRgDNUNIqMfRtSGTIQI8qiQzHwDP2EYKj2D7o8gqDocCE8w0lGRM4DBm3dro5z9aGv5AFnSOQgyovepmbSTeaXQZ/gQKQEhtGKMDVJX0VLp4SKc2V6LiCBYdrtQvUe1TeUaE20Q1dwuFwCw+CbaIfrvrlvU+8SFJ7OKYGhQpoava+1WJBtWHTujAyGAmJmqIvZSVAaGQxPM0LOnu7CiolmuBYVCZ6hoSzXREOM+6UhiCasop3o1CMZdZjuCDm/+xlEvLTp+s5CdBqpDIYh6S56LopKyYgvF52OK4OhRdZE0k/Xtl2Hj5AjKo0MhorTkbJ0+f2yUXNSv/nT+Q2kMCT66WjXLy2s2cSdwktUpDCMCTl7jgVHXSusooOoMFIYHgg51/06CNH1HLTqTuE1OFIYZoS96NkFojAUng8shaHHzfBHoPPMwEMYqujnZepw++Q6lN4OgVai8LdDyba0KjGB2KqM25ZK94f4N7EcOga3P5Qd0zQrhxHfbO8LcMc0suPSM8d8K9YcueNSWX2La4p4rxIvFbCp/H0LKf3DSvO741nldfHFr6r8/UMpfXw8DZCc3oGOTsS70QSlj98z6SkjT9OsPKfMQkIzPqsqkqeRkWsrJdrbJMX6UuVb9sKfa5ORL60QZGtEm2pfNcc5B0cBMSXkvBXc2LRvai3iJdPDWzp3zlvKuEWDYFNQqhFbWXvo3igi4xYSxp5qGIqRekfCqjY7tbnLQarKP/YkZfzwonAtwSPSFOe4yoYMpYuMH0oYA76AMal3rSWcY3m9++q/C4zIGLCEcfxrhEnz0jt1UKJn7Cw2jo/nYhARH+Cy2LKW9lMqx+raDXrVothcDPj5NARCz25V86oay+uZ2YcjbT7NgGWD4HOiSBgaZdMStQ4Avu9bVcE5UfDz2mgITjtWNf549zp6YvPaJMxNpCP1EOEcm4qd3ulWic5NBJ9fyoClFXVoSjGrzq0VSILzSxX4OcJMTOr12bQ47nhj3wbaHOHZgMfCz/NmP6nsOap0k1Pii+WFxed5Q8/VZ6Ms06SE4208Tm2N4nP14ddb3IDROkeaqu7o9kZ8vQX4mpnbTystTnxOo15pKjXOAFkzgxdPddQGFQBsWAj3645zxJvgMNRGfN0T+Nq1+zDC+No5qqwUH9DaNeD1h70eOV+3r7L5j5X/All/CLyGtA/K5rj4aVW1+okZYQ3MGlLgdcB9kbp6E3+zB5Kg1gHDruXuDeuUtM6RtcYeai037Hr8vihJ+R/YqjLHSuDW44PuqTDowZpbPY21UxPcngqg+2IMQ3Bao5whM+C+GKB7mwyEEbr0OB90bxPQ/WnAALs/DWuPIViZ6aBLDLvHEOg+UTCA3ycKbq8vIADv9aUA7tcGAwn7tbH23HuOmhoS9twD2zcRBDL2TQTb+xICcva+/Pv7l4LtQSsMaXvQ/gf7CP/9vaD/g/28/4M92f+DffWrAznpFP/K2Qh//nwL5e+fUaLUcztoj3niOTPAYdXNs4Ik9jQed1aQYmx0Vlv8G+c9KX//zC7l75+7ZlQrOP722Xl//vzD/+AMywp//BxSpc9Zskvlvc+SvXUecP3pu58HrEg801l5kTOde53LfZR3LvdDjh5XMp1FESsS/pNzGnS2euifXuVsdfyIjc2kWLvp6m8zd6P5k9+baAVhTHxt485afqxSq8kZm4cQxLJFCcshN9LUf9KTzIzSWy0nSCMzS/Sru+gFIpRA9yZuwSgdI9Om/r70CqviO1uclml4bX6sMF2eFtl3sb76NqMovFxEspfowvLuUbys5Nl6V+SOGx8yz/OyQ+w6ebFbz8gvsgl6Dxl6vsLy3qtvpbsn/d0iqi88YJZLF2Ug7hx7cGxpNP80aD/ocW/V3XUkhdr3KBqbaT+K/KhXJmzkHDTeB+lBR2RCHI4fnkpyABmb4EUQ5TftvAi9utQcrE/Gi7BdTQjLsfX+X8+doIRh+c18T0CObYAb+4/3ETQYaT0ADUax4Zdsn2VfKJjnuF8AwrEuRc8hNumBROTa6G540osezmi7T3DxN4HTD14hyrG5ufA05WHdiN6oUkip6R5bOYfSVFt6R9dMhRNa8hBuP6bnyuhP8kwPTT+2L+AfbsIK59nqV+Puqmwbr1a/rzItfA33cAfWZJvNLhiwO+5t16iCns0nb0FPaZpQaLo7/Zda26fo/o6vddutxwRetfFRUIv6uffcZLomd8ppoa+nievt/Yt73giNwJM0Mhde/J0n0529Xq1+Vqu1vZsmuRt7i98sztvRa3CW2wo+0+1ci2po8236GVjEt94Vtwi8PbkRI0aMGDFixIgRI0aMGDHiVfAPNku2Ed9FP5oAAAAASUVORK5CYII=" alt="watch_later_icon" />
     <p>    Watch later</p>
    </div>
    <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiakogURgXZVGoEdBuXWOu0jO5o6jVKqnUwml2diqtZccUAtHD6LZ6W_I0p9w6jNdQclw&usqp=CAU" alt="download" />
     <p>Downloads</p>
    </div>
    <div>
     <img src="data:image/png;base64,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" alt="" />
     <p>Liked videos</p>
    </div>
    <div>
     <img src="data:image/png;base64,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" alt="mix" />
    <p> Mix-Akull-Yaad N...</p>
    </div>

</div>
  )
}

export default Left